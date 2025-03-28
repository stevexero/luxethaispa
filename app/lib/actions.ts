'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import postgres from 'postgres';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import bcrypt from 'bcryptjs';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

const SignupSchema = z.object({
  firstname: z.string().min(1, 'First name is required'),
  lastname: z.string().min(1, 'Last name is required'),
  email: z.string().email(),
  password: z.string().min(6),
});

export async function registerUser(
  prevState: string | undefined,
  formData: FormData
) {
  const firstname = formData.get('firstname') as string;
  const lastname = formData.get('lastname') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const password2 = formData.get('password2') as string;

  if (!firstname || !lastname || !email || !password || !password2) {
    return 'All fields are required.';
  }

  if (password !== password2) {
    return 'Passwords do not match.';
  }

  const validatedData = SignupSchema.safeParse({
    firstname,
    lastname,
    email,
    password,
  });
  if (!validatedData.success) {
    return 'Invalid name or email or password format.';
  }

  // Check if user already exists
  const existingUser = await sql`
      SELECT * FROM users WHERE email = ${email}
    `;

  if (existingUser.length > 0) {
    return 'User already exists.';
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Insert new user into the database
  await sql`
      INSERT INTO users (firstname, lastname, email, password) VALUES (${firstname}, ${lastname}, ${email}, ${hashedPassword})
    `;

  const signInResponse = await signIn('credentials', {
    email,
    password,
    redirect: false,
  });

  if (signInResponse?.error) {
    return 'Something went wrong with login.';
  }

  revalidatePath('/dashboard');
  redirect('/dashboard');
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function signInWithGoogle() {
  await signIn('google', { callbackUrl: '/dashboard' });
}
