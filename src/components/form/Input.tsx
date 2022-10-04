import { InputHTMLAttributes } from 'react';

interface PropsInput extends InputHTMLAttributes<HTMLInputElement>
{

} 

export default function Input(props:PropsInput) {
  return (
    <>
          <input 
           {...props}
         className="h-10 w-80 bg-slate-100 rounded-sm placeholder:text-zinc-500 my-3 px-3"/>
    </>
  );
}