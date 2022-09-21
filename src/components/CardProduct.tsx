import { ShoppingCart, Storefront } from 'phosphor-react';
import React from 'react';
import { Card } from '../DomainServices/Interfaces';

interface cardProps extends Card  {
    
}

export function CardProduct(props: cardProps) {
  return (
    <div className="h-[472px] w-72 border rounded-lg">
    <img src={props.images} className="h-56 max-w-72 pb-1" alt="" />
   <div className=" p-4">
    
    <p className="text-left font-light pb-3 text-sm">{props.description}</p>
    <p className="text-2xl font-bold pb-3">KZ{" "+props.firtPrice}</p>
    <p className="text-left font-light text-xs pb-3">{props.failure}</p> 
   
    <footer className="flex gap-10   ">
      <a className="flex gap-2 items-center text-xs text-zinc-500" href="">
        <Storefront size={25}/>
        {props.user}
      </a>
      <button title="signIn" value={props.id} className="border-2 flex-row-reverse  gap-1  border-[#9DC2FF] font-bold  bg-white rounded flex space-x-10 h-[32px]  items-center p-1 text-sm text-blue-600 hover:drop-shadow-xl">
        Adicionar
        <ShoppingCart size={25}/>
      </button>
    </footer>
   
   </div>
  </div>
  );
}