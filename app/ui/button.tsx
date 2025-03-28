import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({
  children,
  className,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      disabled={disabled}
      className={clsx(
        'flex items-center mt-10 self-center lg:self-end bg-gradient-to-br from-green-950 via-emerald-800 to-black text-white rounded-md transition-all duration-200',
        {
          'hover:scale-105 hover:shadow-xl cursor-pointer': !disabled,
          'opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-none':
            disabled,
        },
        className
      )}
    >
      {children}
    </button>
  );
}
