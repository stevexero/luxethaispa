import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcryptjs';
import postgres from 'postgres';
import { v4 as uuidv4 } from 'uuid';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User[]>`SELECT * FROM users WHERE email=${email}`;
    return user[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (!parsedCredentials.success) {
          throw new Error('Invalid credentials.');
        }

        const { email, password } = parsedCredentials.data;
        const user = await getUser(email);
        if (!user) throw new Error('User not found.');

        const passwordsMatch = await bcrypt.compare(password, user.password);
        if (!passwordsMatch) throw new Error('Invalid credentials.');

        return {
          id: user.id,
          firstName: user.firstname || '',
          lastName: user.lastname || '',
          email: user.email,
          role: user.role || '',
        };
      },
    }),
    Google({
      async profile(profile) {
        const pw = uuidv4();

        const firstname = profile.given_name as string;
        const lastname = profile.family_name as string;
        const email = profile.email as string;
        const hashedPassword = await bcrypt.hash(pw, 10);

        const existingUser = await sql`
            SELECT * FROM users WHERE email = ${email}
        `;

        if (existingUser.length === 0) {
          // Insert new user into the database
          await sql`
            INSERT INTO users (firstname, lastname, email, password) VALUES (${firstname}, ${lastname}, ${email}, ${hashedPassword})
        `;
        }

        return {
          id: profile.sub,
          firstName: profile.given_name,
          lastName: profile.family_name,
          email: profile.email,
        };
      },
    }),
  ],
});
