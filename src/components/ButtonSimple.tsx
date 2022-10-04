import { InputHTMLAttributes} from 'react';


interface InputProps extends InputHTMLAttributes<HTMLInputElement>
{
    text:string;
}
export function ButtonSimple(props:InputProps) {
  return (
    <button
    {...props}
      title={props.text}
      className="border-2 border-[#9DC2FF] bg-white rounded  h-10  p-1 font-bold text-sm text-blue-600  hover:drop-shadow-xl"
    >
      {props.text}
    </button>

  );
}
