import { MagnifyingGlass, ShoppingCart, User, X } from "phosphor-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ButtonSimple } from "./ButtonSimple";

interface NavbarProps {
  login?: Boolean;
}

export function NavBar(props: NavbarProps) {
  let [loginState, setLoginState] = useState<Boolean>(false);

  useEffect(() => {
    if (props.login === false) {
      setLoginState(false);
    } else {
      setLoginState(true);
    }
  }, [loginState]);
  return (
    <div className="border">
      <div className=" flex h-16 w-auto p-4 justify-between items-center invisible sm:visible  ">
        <div className="flex-row space-x-6">
          <Link
            to="/"
            className="text-3xl text-transparent bg-gradient-blue bg-clip-text"
          >
            <span className="font-black">Tio</span>/Merkado
          </Link>
          <Link to="" className="">
            Suporte
          </Link>
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
          <Link
            to="/login"
            title="Iniciar sessão"
            className="border-2 border-[#9DC2FF]  bg-white rounded  h-10  p-2 font-bold text-sm text-blue-600  hover:drop-shadow-xl"
          >
            Iniciar Sessão
            <User size={25} className="p-0 m-0 inline " />
          </Link>
          <Link
            to=""
            title="signIn"
            className="border-2 border-[#9DC2FF]  bg-white rounded  h-10 p-2 font-bold text-sm text-blue-600  hover:drop-shadow-xl"
          >
            Carrinho
            <ShoppingCart size={25} className="p-0 m-0 inline " />
          </Link>
        </div>
      </div>
    </div>
  );
}
