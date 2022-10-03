import "./styles/main.css";
import {
  MagnifyingGlass,
  X,
  Laptop,
  Desktop,
  DesktopTower,
  Cpu,
  ComputerTower,
} from "phosphor-react";
import Carousel from "nuka-carousel";
import axios from "axios";
import * as Dialog from "@radix-ui/react-dialog";

import img2 from "./assets/image2.png";
import img3 from "./assets/image3.png";
import { CardProduct } from "./components/CardProduct";
import { useEffect, useState } from "react";

import { TypeBrand, TypeCard } from "./DomainServices/Types";
import { Modal } from "./components/Modal";
import { ButtonBrand } from "./components/ButtonBrand";
import { NavBar } from "./components/Navbar";

interface cardType extends TypeCard {}
interface brandType extends TypeBrand {}

function App() {

  const [products, setProducts] = useState<cardType[]>([]);
  const [brands,setBrands] = useState<Array<TypeBrand>>([]);
  const urlBase = "https://localhost:7108/api/product/";

  useEffect(() => 
  {
    axios(urlBase+"PC/GetAll").
    then((response) => setProducts(response.data));

    axios(urlBase+"Brand/GetAll").
    then((response) => setBrands(response.data));
  }, []);

    console.log(brands);

  return (
    <>
      <div className="">
            <NavBar />
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
          <p className=" text-bold pl-4 pt-4 text-lg font-medium">
            {" "}
            Modelos {" "}
          </p>
          <div className="p-5 inline-grid grid-cols-3 gap-4 overflow-y-auto h-80">
              {
                brands.map((values)=>{
                    return(
                      <ButtonBrand url={values.imgUrl} value={values.brandName} title={values.brandName}  id={values.id}>
                  
                      </ButtonBrand>
                    )
                })
              }

          </div>
        </div>

        <div className=" bg-emerald-500 overflow-hidden w-full ">
          <Carousel autoplay={true} animation="fade" autoplayInterval={2}>
            <img alt="" src={img3} />
            <img alt="" src={img2} />
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
          <Dialog.Root>
           {/*<Modal />*/} 
           <Modal id="08da912e-cdf4-405a-8cc9-e2cdc44a749c" />
      
          {
              products.map((value)=> {
                return(
                    <CardProduct
                  key={value.id} 
                  id={value.id} 
                  images={value.images}
                  description = {value.description}
                  productName = {value.productName}
                  brand = {value.brand.brandName}
                  ram = {value.ram}
                  hardisk = {value.hardisk}
                  firtPrice = {value.firtPrice}
                  failure = {value.failure}
                  user = {value.user.firstName}
                  />
                );
              })
            }
            </Dialog.Root>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
