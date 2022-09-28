import { ShoppingCart, Storefront } from 'phosphor-react';
import { Card } from '../DomainServices/Interfaces';

import * as Dialog from '@radix-ui/react-dialog';

interface cardProps extends Card  {
    
}

const GetIdProduct = (id:string)=>
{
    //alert (id)
}

export function CardProduct(props: cardProps) {
  return (
    <div className="h-[472px] w-72 border rounded-lg">
    <img src={props.images} className="h-56 max-w-72 pb-1 rounded-t-lg" alt="" />
   <div className=" p-4">
   <p className="text-sm font-bold pb-3">{props.productName.toUpperCase()}</p>
    <p className="text-left font-light pb-3 text-sm">{props.description}</p>
    <label className="text-left font-light pb-3 text-sm"><span className='font-bold'>Marca:</span> {props.brand}</label>
    <p className="text-2xl font-bold pb-3">KZ{" "+props.firtPrice}</p>
    <p className="text-left font-light text-xs pb-3">{props.failure}</p> 
   
    <footer className="flex gap-10">
      <a className="flex gap-2 items-center text-xs text-zinc-500" href="">
        <Storefront size={25}/>
        {props.user}
      </a>
      <Dialog.DialogTrigger onClick={()=>GetIdProduct(props.id)} className="border-2 flex-row-reverse  gap-1  border-[#9DC2FF] font-bold  bg-white rounded flex space-x-10 h-[32px]  items-center p-1 text-sm text-blue-600 hover:drop-shadow-xl">
        Comprar
        <ShoppingCart size={25}/>
      </Dialog.DialogTrigger>
    </footer>
   
   </div>
  </div>
  );
}
