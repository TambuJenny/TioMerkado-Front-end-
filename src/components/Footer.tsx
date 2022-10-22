import { FacebookLogo, TwitterLogo } from 'phosphor-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
      <>
      <footer className='absolute w-[100%] h-auto left-0 bg-gradient-blue text-white mt-40 '>  
          <div className="mx-36 my-24 text-justify">
            <div className=" pb-12">
            <Link
            to="/"
            className="text-4xl text-transparent bg-white bg-clip-text"
          >
            <span className="font-black">Tio</span>/Merkado
          </Link>
             <small>  © 2022 - Todos direitos reservado </small>
             <p><small>By Tambu M. Jenny</small></p>
            </div>
              <div className=" flex space-x-40flex space-x-20 w-auto">
                <div className=" flex-col">
                    <p className="font-black text-xl">Partilhar</p>
                    <div className="pt-8 space-y-4 
                    ">
                        <Link to= "" className='flex justify-center items-center space-x-10'><FacebookLogo size={32} /></Link>
                        <Link to= "" className='flex justify-center items-center space-x-10'><TwitterLogo size={32} /></Link>
                    </div>
                </div>
                <div className=" flex flex-col">
                    <p className="font-black text-xl">Página</p>
                    <div className="pt-8 space-y-4 font-bold  ">
                        <Link to="" className='flex justify-start items-center space-x-10' >Blog</Link>
                        <Link to="" className='flex justify-start items-center space-x-10'>FAQ</Link>
                        <Link to="" className='flex justify-start items-center space-x-10'>Suporte</Link>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="font-black text-xl">Carreiras</p>
                    <div className="pt-8 space-y-4 font-bold  ">
                        <Link to="" className='flex justify-start items-center space-x-10' >Trabalhar Conosco</Link>
                        <Link to="" className='flex justify-start items-center space-x-10'>Ser Parceiro</Link>
                    </div>
                </div>
                <div className="card">
                    <p className="font-black text-xl">Regras de Negócio</p>
                    <div className="pt-8 space-y-4 font-bold  ">
                        <Link to="" className='flex justify-start items-center space-x-10' >Nossas Regras</Link>
                        <Link to="" className='flex justify-start items-center space-x-10'>Garantia</Link>
                    </div>
                </div>
          </div>
        </div>
      </footer>
      </>
    );
  }