import "./styles/main.css";
import {
  MagnifyingGlass,
  X,
  Laptop,
  Desktop,
  DesktopTower,
  Cpu,
  ComputerTower,
  ShoppingCart
} from "phosphor-react";
import Carousel from "nuka-carousel";

import img2 from "./assets/image2.png";
import img3 from "./assets/image3.png";

function App() {
  return (
    <>
      <div className="border">
        <div className=" flex w-full h-16 p-4 justify-between items-center">
          <div className="flex-row space-x-6">
            <a href="" className="text-3xl">
              Square
            </a>
            <a href="" className="">
              Suporte
            </a>
            <a href="" className="">
              Criar Conta
            </a>
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
                title="pesquisar"
                className="h-10 bg-neutral-100 rounded-r-full pr-2"
              >
                <X size={30} weight="fill" color="#2979FF" />
              </button>
            </div>
          </div>

          <div className="flex-row-reverse  space-x-4 items-start  gap-4 ">
            <button
              title="signIn"
              className="border-2 border-[#9DC2FF] bg-white rounded  h-10 w-28 p-1 text-sm  hover:drop-shadow-xl"
            >
              Iniciar sessão
            </button>
            <button
              title="signIn"
              className="border-2 border-[#9DC2FF] bg-white rounded  h-10 w-28 p-1 text-sm  hover:drop-shadow-xl"
            >
              Carrinho
            </button>
          </div>
        </div>

        <div className="flex h-12 w-full text-xs text-[#787885]  items-center justify-center space-x-2  ">
          <div className="flex space-x-8  border-solid  h-12 w-40 rounded p-2 hover:bg-[#9DC2FF]">
            <button className=""> Laptops</button>
            <Laptop size={35} />
          </div>

          <div className="flex  space-x-8  border-solid  h-12 w-40 rounded p-2 hover:bg-[#9DC2FF]">
            <button className=""> Desktop</button>
            <Desktop size={35} />
          </div>

          <div className="flex  space-x-8  border-solid  h-12 w-40 rounded p-2 hover:bg-[#9DC2FF]">
            <button className=""> DesktopTower</button>
            <DesktopTower size={35} />
          </div>

          <div className="flex  space-x-20  border-solid  h-12 w-40 rounded p-2 hover:bg-[#9DC2FF]">
            <button className=""> CPU</button>
            <Cpu size={35} />
          </div>

          <div className="flex  space-x-12  border-solid  h-12 w-40 rounded p-2 hover:bg-[#9DC2FF]">
            <button className=""> Gabinet</button>
            <ComputerTower size={35} />
          </div>
        </div>
      </div>
      <div className="flex space-x-4 border-b max-h-96 h-96 ">
        <div className="flex-initial max-w-96 w-96 h-80">

          <p className=" text-bold pl-4 pt-4 text-3xl text-black"> Modelos <hr/> </p> 
           
          <div className="p-5 inline-grid grid-cols-3 gap-4 overflow-y-auto h-80">
            

            <button title="imgmarca"
              className="h-20 w-20 rounded bg-white drop-shadow-xl items-center justify-center flex hover:bg-[#9DC2FF] ">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1024px-HP_logo_2012.svg.png" alt="" className="w-12 h-12 "/>
            </button>

            <button title="imgmarca"
              className="h-20 w-20 rounded bg-white drop-shadow-xl items-center justify-center flex hover:bg-[#9DC2FF] ">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1024px-HP_logo_2012.svg.png" alt="" className="w-12 h-12 "/>
            </button>

            <button title="imgmarca"
              className="h-20 w-20 rounded bg-white drop-shadow-xl items-center justify-center flex hover:bg-[#9DC2FF] ">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1024px-HP_logo_2012.svg.png" alt="" className="w-12 h-12 "/>
            </button>

            <button title="imgmarca"
              className="h-20 w-20 rounded bg-white drop-shadow-xl items-center justify-center flex hover:bg-[#9DC2FF] ">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1024px-HP_logo_2012.svg.png" alt="" className="w-12 h-12 "/>
            </button>

            <button title="imgmarca"
              className="h-20 w-20 rounded bg-white drop-shadow-xl items-center justify-center flex hover:bg-[#9DC2FF] ">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1024px-HP_logo_2012.svg.png" alt="" className="w-12 h-12 "/>
            </button>

            <button title="imgmarca"
              className="h-20 w-20 rounded bg-white drop-shadow-xl items-center justify-center flex hover:bg-[#9DC2FF] ">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1024px-HP_logo_2012.svg.png" alt="" className="w-12 h-12 "/>
            </button>

            <button title="imgmarca"
              className="h-20 w-20 rounded bg-white drop-shadow-xl items-center justify-center flex hover:bg-[#9DC2FF] ">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1024px-HP_logo_2012.svg.png" alt="" className="w-12 h-12 "/>
            </button>

            <button title="imgmarca"
              className="h-20 w-20 rounded bg-white drop-shadow-xl items-center justify-center flex hover:bg-[#9DC2FF] ">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1024px-HP_logo_2012.svg.png" alt="" className="w-12 h-12 "/>
            </button>

            <button title="imgmarca"
              className="h-20 w-20 rounded bg-white drop-shadow-xl items-center justify-center flex hover:bg-[#9DC2FF] ">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1024px-HP_logo_2012.svg.png" alt="" className="w-12 h-12 "/>
            </button>

            <button title="imgmarca"
              className="h-20 w-20 rounded bg-white drop-shadow-xl items-center justify-center flex hover:bg-[#9DC2FF] ">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/1024px-HP_logo_2012.svg.png" alt="" className="w-12 h-12 "/>
            </button>
    
          </div>
        </div>

        <div className=" bg-emerald-500 overflow-hidden w-full ">
          <Carousel autoplay={true}  animation="fade" autoplayInterval={2} >
          <img alt = "" src={img3} />
          <img alt = "" src={img2} />
          </Carousel>
        </div>
      </div>

      <div className="flex space-x-4 pt-5 ">
        <div className="flex-initial max-w-96 w-96 pl-5">

        <input
                type="text"
                placeholder="Pesquise aqui !"
                className=" rounded-full h-10 bg-neutral-100 p-4 placeholder:text-black"
              />
        </div>
        <div className=" w-full ">
          <div className="p-5 grid grid-cols-4 gap-4">
      
              <div className="h-[472px] w-72 border rounded-lg">
                <img src="" className="h-56 pb-1" alt="" />
               <div className=" p-4">
                
                <p className="text-left font-light pb-3 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="text-2xl font-bold pb-3">kz 2.000 </p>
                <p className="text-left font-light text-xs pb-3">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. </p> 
               
                <footer className="flex flex-row-reverse ">
                  <button title="signIn" className="border-2  border-[#9DC2FF] bg-white rounded flex space-x-10 h-10 w-36 items-center p-1 text-sm  hover:drop-shadow-xl">
                    Adicionar
                    <ShoppingCart size={25}/>
                  </button>
                </footer>
               
               </div>
              </div>

              <div className="h-[472px] w-72 border rounded-lg">
                <img src="" className="h-56 pb-1" alt="" />
               <div className=" p-4">
                
                <p className="text-left font-light pb-3 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="text-2xl font-bold pb-3">kz 2.000 </p>
                <p className="text-left font-light text-xs pb-3">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. </p> 
               
                <footer className="flex flex-row-reverse ">
                  <button title="signIn" className="border-2  border-[#9DC2FF] bg-white rounded flex space-x-10 h-10 w-36 items-center p-1 text-sm  hover:drop-shadow-xl">
                    Adicionar
                    <ShoppingCart size={25}/>
                  </button>
                </footer>
               
               </div>
              </div>

              <div className="h-[472px] w-72 border rounded-lg">
                <img src="" className="h-56 pb-1" alt="" />
               <div className=" p-4">
                
                <p className="text-left font-light pb-3 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="text-2xl font-bold pb-3">kz 2.000 </p>
                <p className="text-left font-light text-xs pb-3">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. </p> 
               
                <footer className="flex flex-row-reverse ">
                  <button title="signIn" className="border-2  border-[#9DC2FF] bg-white rounded flex space-x-10 h-10 w-36 items-center p-1 text-sm  hover:drop-shadow-xl">
                    Adicionar
                    <ShoppingCart size={25}/>
                  </button>
                </footer>
               
               </div>
              </div>

              <div className="h-[472px] w-72 border rounded-lg">
                <img src="" className="h-56 pb-1" alt="" />
               <div className=" p-4">
                
                <p className="text-left font-light pb-3 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="text-2xl font-bold pb-3">kz 2.000 </p>
                <p className="text-left font-light text-xs pb-3">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. </p> 
               
                <footer className="flex flex-row-reverse ">
                  <button title="signIn" className="border-2  border-[#9DC2FF] bg-white rounded flex space-x-10 h-10 w-36 items-center p-1 text-sm  hover:drop-shadow-xl">
                    Adicionar
                    <ShoppingCart size={25}/>
                  </button>
                </footer>
               
               </div>
              </div>

              <div className="h-[472px] w-72 border rounded-lg">
                <img src="" className="h-56 pb-1" alt="" />
               <div className=" p-4">
                
                <p className="text-left font-light pb-3 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="text-2xl font-bold pb-3">kz 2.000 </p>
                <p className="text-left font-light text-xs pb-3">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. </p> 
               
                <footer className="flex flex-row-reverse ">
                  <button title="signIn" className="border-2  border-[#9DC2FF] bg-white rounded flex space-x-10 h-10 w-36 items-center p-1 text-sm  hover:drop-shadow-xl">
                    Adicionar
                    <ShoppingCart size={25}/>
                  </button>
                </footer>
               
               </div>
              </div>

              <div className="h-[472px] w-72 border rounded-lg">
                <img src="" className="h-56 pb-1" alt="" />
               <div className=" p-4">
                
                <p className="text-left font-light pb-3 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="text-2xl font-bold pb-3">kz 2.000 </p>
                <p className="text-left font-light text-xs pb-3">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. </p> 
               
                <footer className="flex flex-row-reverse ">
                  <button title="signIn" className="border-2  border-[#9DC2FF] bg-white rounded flex space-x-10 h-10 w-36 items-center p-1 text-sm  hover:drop-shadow-xl">
                    Adicionar
                    <ShoppingCart size={25}/>
                  </button>
                </footer>
               
               </div>
              </div>

              <div className="h-[472px] w-72 border rounded-lg">
                <img src="" className="h-56 pb-1" alt="" />
               <div className=" p-4">
                
                <p className="text-left font-light pb-3 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="text-2xl font-bold pb-3">kz 2.000 </p>
                <p className="text-left font-light text-xs pb-3">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. </p> 
               
                <footer className="flex flex-row-reverse ">
                  <button title="signIn" className="border-2  border-[#9DC2FF] bg-white rounded flex space-x-10 h-10 w-36 items-center p-1 text-sm  hover:drop-shadow-xl">
                    Adicionar
                    <ShoppingCart size={25}/>
                  </button>
                </footer>
               
               </div>
              </div>

              <div className="h-[472px] w-72 border rounded-lg">
                <img src="" className="h-56 pb-1" alt="" />
               <div className=" p-4">
                
                <p className="text-left font-light pb-3 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="text-2xl font-bold pb-3">kz 2.000 </p>
                <p className="text-left font-light text-xs pb-3">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. </p> 
               
                <footer className="flex flex-row-reverse ">
                  <button title="signIn" className="border-2  border-[#9DC2FF] bg-white rounded flex space-x-10 h-10 w-36 items-center p-1 text-sm  hover:drop-shadow-xl">
                    Adicionar
                    <ShoppingCart size={25}/>
                  </button>
                </footer>
               
               </div>
              </div>

          </div>
        </div>

      </div>
    </>
  );
}

export default App;
