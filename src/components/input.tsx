import React from 'react';

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(function _Input(
  { label, className, ...props },
  ref
) {
  return (
    <label className="flex flex-col justify-between">
      <span>{label}</span>
      <input
        className={`${className} bg-[#e5e5e5] text-zinc-800 focus:outline-none px-4 py-2 rounded-lg `}
        ref={ref}
        {...props}
      />
    </label>
  );
});

export default Input;
