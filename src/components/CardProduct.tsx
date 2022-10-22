import { Heart, Info, Storefront } from "phosphor-react";
import { Card } from "../DomainServices/Interfaces";

import * as Dialog from "@radix-ui/react-dialog";

interface cardProps extends Card {
  buscarDadosProdutos(id: string): void;
}

export function CardProduct(props: cardProps) {
  return (
    <>
      <div className="relative block bg-white">
        <button
          title=""
          type="button"
          className="absolute right-4 top-4 text-white"
        >
          <Heart size={32} weight="bold" color="#2764dd" />
        </button>

        <img
          alt="Toy"
          src={props.images}
          className="h-56 w-full object-contain lg:h-72"
        />

        <div className="p-6">
          <span className="inline-block bg-gradient-blue px-3 py-1 text-xs font-bold text-white">
          {props.brand}
          </span>

          <h3 className="mt-4 text-lg font-bold">{props.productName?.toUpperCase()}</h3>

          <p className="mt-2 text-sm font-medium text-gray-600">KZ{" " + props.firtPrice}</p>

          <a className="mt-2 flex gap-2 items-center text-xs text-zinc-500" href="">
            <Storefront size={25} />
            {props.user}
          </a>

          <Dialog.DialogTrigger
            type="button"
            onClick={props.buscarDadosProdutos}
            className="mt-4  gap-2 flex w-full items-center justify-center rounded-sm  border-2 bg-white border-[#9DC2FF] px-8 py-4"
          >
            <span className="text-sm font-bold text-blue-600"> Saber Mais </span>
            <Info size={25} color = ""/>
          </Dialog.DialogTrigger>
        </div>
      </div>
    </>
  );
}
