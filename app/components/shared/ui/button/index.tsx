import React from 'react';
import { cn } from '@/app/lib/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'red' | 'green';
  variant?: 'solid' | 'outline';
}

const Button: React.FC<ButtonProps> = ({
  size = 'md',
  color = 'blue',
  variant = 'solid',
  className,
  children,
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const colorClasses = {
    blue:
      variant === 'solid'
        ? 'bg-blue-500 hover:bg-blue-600 text-white'
        : 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
    red:
      variant === 'solid'
        ? 'bg-red-500 hover:bg-red-600 text-white'
        : 'border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white',
    green:
      variant === 'solid'
        ? 'bg-green-500 hover:bg-green-600 text-white'
        : 'border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white',
  };

  return (
    <button
      className={cn(
        'rounded',
        sizeClasses[size],
        colorClasses[color],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
