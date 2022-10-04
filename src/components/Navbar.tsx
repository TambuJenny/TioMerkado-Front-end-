import { MagnifyingGlass, ShoppingCart, User, X } from "phosphor-react";
import { Link } from "react-router-dom";
import { ButtonSimple } from "./ButtonSimple";

export function NavBar() {
  return (
      <div className="border">
        <div className=" flex w-full h-16 p-4 justify-between items-center">
          <div className="flex-row space-x-6">
            <a href="" className="text-3xl">
              <span className="font-black">Tio</span>/Merkado
            </a>
            <a href="" className="">
              Suporte
            </a>
            <Link to="/newAccount" className="">
              Criar Conta
            </Link>
          </div>

          <div className=" flex-col ">
            <div className="flex">
              <button
                title="pesquisar"
                className=" w-10 h-10 bg-neutral-100 rounded-l-full pl-2"
              >
                <MagnifyingGlass size={25} weight="fill" color="#787885" />
              </button>
              <input
                type="text"
                placeholder="Pesquise aqui !"
                className="w-96 h-10 bg-neutral-100 p-4 placeholder:text-black"
              />
              <button
                title="limpar"
                className="h-10 bg-neutral-100 rounded-r-full pr-2"
              >
                <X size={30} weight="fill" color="#2979FF" />
              </button>
            </div>
          </div>

          <div className="flex-row-reverse  space-x-4 items-start  gap-4 ">
            <button title="Iniciar sessão" className="border-2 border-[#9DC2FF]  bg-white rounded  h-10  p-1 font-bold text-sm text-blue-600  hover:drop-shadow-xl">
                Iniciar Sessão
                <User size={25}  className="p-0 m-0 inline " />
            </button>
            <button
              title="signIn"
              className="border-2 border-[#9DC2FF]  bg-white rounded  h-10 w-28 p-1 font-bold text-sm text-blue-600  hover:drop-shadow-xl">
              Carrinho
              <ShoppingCart size={25}  className="p-0 m-0 inline " />
            </button>
          </div>
        </div>
      </div>
  );
}
