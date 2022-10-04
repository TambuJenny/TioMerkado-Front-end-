import { UploadSimple } from "phosphor-react";
import Input from "../../components/form/input";
import { NavBar } from "../../components/Navbar";

export function CreateAccount() {
  return (
    <>
      <NavBar />
      <div className="fixed bg-white my-5 px-10 text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-sm w-[780px] h-[450px] shadow-lg shadow-black/25 ">
        <h2 className="pt-6 text-2sl border-b pb-2">
          Criar uma conta no <span className="font-black">Tio/Merkado </span>é
          rápido e fácil
        </h2>
        <form action="">
          <div className=" flex flex-nowrap">
            <div className="flex flex-col pt-8 pb-8 pr-5">
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

              <div className="flex-row-reverse">
                <button
                  title="signIn"
                  className="border-2 border-blue-600 bg-blue-600 rounded  h-10 w-40 p-1 ml-40 my-10 font-bold text-sm text-white  hover:drop-shadow-xl"
                >
                  Cadastrar
                  <UploadSimple size={25} className="p-0 m-0 inline " />
                </button>
                
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
