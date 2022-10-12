import { UploadSimple } from "phosphor-react";
import { Link } from "react-router-dom";
import { BackgroundAction } from "../../components/BackgroundAction";
import Input from "../../components/form/Input";
import { NavBar } from "../../components/Navbar";

export function CreateAccount() {
  return (
    < div className="">
      <NavBar />
      <BackgroundAction action="Criar Conta" descriçao="Criar uma conta no Tio/Merkado é rápido e fácil"  />
      <div className="fixed bg-white my-5 px-10 text-black top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-sm h-[450px] shadow-lg shadow-black/25 ">
        <h2 className="pt-6 text-2sl border-b pb-2">
          Preenche os campos abaixo
        </h2>
        <form action="">
          <div className=" flex flex-nowrap space-x-4">
            <div className="flex flex-col pt-8 pb-8">
              <label className="text-sm"> Primeiro Nome</label>
              <Input placeholder="Digite o primeiro Nome" required />
              <label className="text-sm"> E-mail</label>
              <Input placeholder="example@tiomerkado.com" required />
              <label className="text-sm"> Numero de telefone</label>
              <Input placeholder="92200004" type="text" required />
            </div>
            <div className="flex flex-col pt-8 pb-8 ">
              <label className="text-sm"> Ultimo Nome</label>
              <Input placeholder="Digite o ultimo Nome" type="text" required />
              <label className="text-sm"> Password</label>
              <Input type="password" placeholder="Digite o Ultimo nome" />
              <label className="text-sm">Imagem de perfil</label>
              <Input type="file" placeholder="Digite o Ultimo nome" />

              <div className=" flex-row-reverse  space-x-4 ">
                <Link
                  to=""
                  className=" text-sm text-blue-600 "
                >
                  Criar conta como Empresa
        
                </Link>
                <button
                  title="signIn"
                  className="border-2 border-blue-600 bg-blue-600 rounded  h-10 w-40 p-1  my-10 font-bold text-sm text-white  hover:drop-shadow-xl"
                >
                  Cadastrar
                  <UploadSimple size={25} className="p-0 ml-5 inline " />
                </button>
                
                
              </div>
            </div>
          </div>
        </form>
      </div>
    </ div>
  );
}
