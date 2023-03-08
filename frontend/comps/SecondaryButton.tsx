import { ButtonHTMLAttributes } from "react";

export default function ActionButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { children, ...rest } = props;

  return <div
    {...rest}
   // className="inline-flex items-center px-4 py-2 text-sm font-medium text-slate-200 rounded-md shadow-sm max-w-fit focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none"
    >{props.children}</div>
  
} 
