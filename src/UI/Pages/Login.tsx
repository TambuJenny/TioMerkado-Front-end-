import { Link } from "react-router-dom";
import { BackgroundAction } from "../../components/BackgroundAction";
import Input from "../../components/form/Input";
import { NavBar } from "../../components/Navbar";
import { UploadSimple } from "phosphor-react";

export function Login() {
  return (
    <div className="">
      <NavBar />
      <BackgroundAction
        action="Iniciar Sessão"
        descriçao="Iniciar sessão para beneficiar mais dos nossos serviços"
      />
      <div className="fixed bg-white my-5 px-10 text-black top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-sm w-auto h-[450px] shadow-lg shadow-black/25 ">
        <h2 className="pt-6 text-2sl border-b pb-2">Login</h2>
        <form action="">
          <div className="flex flex-col pt-8 pb-8">
            <label className="text-sm"> E-mail ou Telefone</label>
            <Input placeholder="Digite e-mail ou numero de telefone" required />
            <label className="text-sm"> Senha</label>
            <Input type="password" placeholder="Digite a senha" required />
          </div>

          <div className="flex justify-center flex-col items-center">
            <button
              title="signIn"
              className="border-2 border-blue-600 bg-blue-600 rounded  h-10 w-[100%] p-1  mb-4 font-bold text-sm text-white  hover:drop-shadow-xl"
            >
              Cadastrar
              <UploadSimple size={25} className="p-0 ml-5 inline " />
            </button>
            <Link to="/newAccount" className=" text-sm text-blue-600 ">
              Não tenho conta, criar uma
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
