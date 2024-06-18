import React from "react";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label:string
}
export default function Input({value,onChange,label,className}:InputProps) {
  return (
    <label className="flex gap-6 justify-between">
        <span>
            {label}
        </span>
        <input
        value = {value}
        onChange={onChange}
        className={`${className} bg-[#e5e5e5] text-zinc-800 focus:outline-none px-4 py-2 rounded-lg `}
        />
    </label>
  )
}
