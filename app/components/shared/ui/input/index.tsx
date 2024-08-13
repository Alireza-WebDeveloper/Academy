import React from 'react';
import { cn } from '@/app/lib/utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'red' | 'green';
}

const Input: React.FC<InputProps> = ({
  inputSize = 'md',
  color = 'blue',
  className,
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const colorClasses = {
    blue: 'border-blue-500 focus:ring-blue-500',
    red: 'border-red-500 focus:ring-red-500',
    green: 'border-green-500 focus:ring-green-500',
  };

  return (
    <input
      className={cn(
        'border rounded focus:outline-none focus:ring-2',
        sizeClasses[inputSize],
        colorClasses[color],
        className
      )}
      {...props}
    />
  );
};

export default Input;
