import React from 'react';

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  label?: string;
  rows?: number;
  cols?: number;
}

const TextArea: React.FC<TextAreaProps> = ({
  className,
  label,
  rows = 5,
  cols = 30,
  ...props
}) => {
  return (
    <textarea
      className={`p-2 border rounded-md text-black resize-none ${className}`}
      placeholder={label}
      rows={rows}
      cols={cols}
      {...props}
    />
  );
};

export default TextArea;
