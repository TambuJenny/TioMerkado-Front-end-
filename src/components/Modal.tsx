import * as Dialog from "@radix-ui/react-dialog";
import { ShoppingCart, WhatsappLogo } from "phosphor-react";
import { Card } from "../DomainServices/Interfaces";
import axios from "axios";
import { useState, useEffect } from "react";

interface ModalProduct extends Card {}

export function Modal(props: ModalProduct) {


  if(props.id !== null )
  {
    //alert(props.id);
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed">
        <Dialog.Content className="fixed bg-[#ffff] py-8 px-10 text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[780px] shadow-lg shadow-black/25">
          <Dialog.Title className="text-3xl font-black pb-4">
          </Dialog.Title>
          <div className="flex gap-3">
            <img
              src={props.images}
              alt=""
              className="h-[200px] max-h-[200px] w-60 border"
            />
            <div className=" flex flex-col ">
              <div className="">
                <p className="text-sm font-black">Descrição</p>
                <p className="text-sm pb-4">
                  {props.description}
                  <small>
                    {props.brand} | {props.ram} |{" "}
                    {props.hardisk}{" "}
                  </small>
                </p>
                <p className="text-xl font-bold">
                  kZ {props.firtPrice}{" "}
                </p>
                <p className="text-left font-light text-xs pb-3">
                  {props.failure}
                </p>
              </div>
              <div className="flex flex-row-reverse pt-4 gap-4">
                <button className="border-2 flex-row-reverse  gap-1  border-green-400 font-bold  bg-green-400 rounded flex space-x-10 h-[32px]  items-center p-1 text-sm text-white hover:drop-shadow-xl">
                  Comprar no Whatsapp
                  <WhatsappLogo size={25} />
                </button>
                <button className="border-2 flex-row-reverse  gap-1  border-[#9DC2FF] font-bold  bg-white rounded flex space-x-10 h-[32px]  items-center p-1 text-sm text-blue-600 hover:drop-shadow-xl">
                  Adicionar
                  <ShoppingCart size={25} />
                </button>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  );
}
