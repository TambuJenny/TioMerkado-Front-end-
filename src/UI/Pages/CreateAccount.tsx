import { NavBar } from "../../components/Navbar";

export function CreateAccount() {
  return (
    <>
        <NavBar />
        <div className="fixed bg-white my-5 px-10 text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-sm w-[780px] h-[380px] shadow-lg shadow-black/25 ">
            <h2 className="pt-6 text-2sl border-b pb-2">Criar uma conta no <span className="font-black">Tio/Merkado </span>é rápido e fácil</h2>
            <form action="" className="flex flex-nowrap ">
               <div className="flex flex-col pt-8 pb-8 pr-5">
                <label className="text-sm"> Primeiro Nome</label>
                <input type= "text" placeholder = "Digite o primeiro nome" className="h-10 w-80 "/>
                <label className="text-sm"> E-mail</label>
                <input type= "email" placeholder = "example@gmail.com" className="h-10 w-80"/>
                <label className="text-sm"> Numero de telefone</label>
                <input type= "text" placeholder = "example@gmail.com" className="h-10 w-80"/>

               </div>
               <div className="flex flex-col pt-8 pb-8 ">
                <label className="text-sm"> Ultimo Nome</label>
                <input type= "text" placeholder = "Digite o Ultimo nome" className="h-10 w-80"/>
                <label className="text-sm"> Password</label>
                <input type= "password" placeholder = "Digite o Ultimo nome" className="h-10 w-80"/>
                <label className="text-sm">Imagem de perfil</label>
                <input type= "file" placeholder = "Digite o Ultimo nome" className="h-10 w-80"/>
               </div>
            </form>
        </div>
    </>
  );
}