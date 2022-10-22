import "./styles/main.css";
import {
  MagnifyingGlass,
  X,
  Laptop,
  Desktop,
  DesktopTower,
  Cpu,
  ComputerTower
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
import Footer from "./components/Footer";

interface cardType extends TypeCard {}
interface brandType extends TypeBrand {}

function App() {
  const [products, setProducts] = useState<cardType[]>([]);
  const [productModal, setProductModal] = useState<cardType>();
  const [brands, setBrands] = useState<Array<TypeBrand>>([]);
  const urlBase = "https://localhost:7108/api/product/";

  useEffect(() => {
    axios(urlBase + "PC/GetAll").then((response) => setProducts(response.data));

    axios(urlBase + "Brand/GetAll").then((response) =>
      setBrands(response.data)
    );
  }, []);

  function getAllInformationProductforModal(id: string) {
    products.forEach((product) => {
      if (product.id === id) {
        setProductModal(product);
      }
    });
  }

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
          <p className=" text-bold pl-4 pt-4 text-lg font-medium"> Modelos </p>
          <div className="p-5 inline-grid grid-cols-3 gap-4 overflow-y-auto h-80">
            {brands.map((values) => {
              return (
                <ButtonBrand
                  url={values.imgUrl}
                  value={values.brandName}
                  title={values.brandName}
                  id={values.id}
                ></ButtonBrand>
              );
            })}
          </div>
        </div>

        <div className=" bg-emerald-500 overflow-hidden w-full ">
          <Carousel autoplay={true} animation="fade" autoplayInterval={2}>
            <img alt="" src={img3} />
            <img alt="" src={img2} />
          </Carousel>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
          
        <details open className="overflow-hidden rounded border border-gray-200">
          <summary
            className="flex items-center justify-between bg-gray-100 px-5 py-3 lg:hidden"
          >
            <span className="text-sm font-medium"> Toggle Filters </span>

            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </summary>

          <form className="border-t border-gray-200 lg:border-t-0">
            <fieldset>
              <legend
                className="block w-full bg-gray-50 px-5 py-3 text-xs font-medium"
              >
                Type
              </legend>

              <div className="space-y-2 px-5 py-6">
                <div className="flex items-center">
                  <input
                    id="toy"
                    type="checkbox"
                    name="type[toy]"
                    className="h-5 w-5 rounded border-gray-300"
                  />

                  <label for="toy" className="ml-3 text-sm font-medium">
                    Toy
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="game"
                    type="checkbox"
                    name="type[game]"
                    className="h-5 w-5 rounded border-gray-300"
                  />

                  <label for="game" className="ml-3 text-sm font-medium">
                    Game
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="outdoor"
                    type="checkbox"
                    name="type[outdoor]"
                    className="h-5 w-5 rounded border-gray-300"
                  />

                  <label for="outdoor" className="ml-3 text-sm font-medium">
                    Outdoor
                  </label>
                </div>

                <div className="pt-2">
                  <button type="button" className="text-xs text-gray-500 underline">
                    Reset Type
                  </button>
                </div>
              </div>
            </fieldset>

            <div>
              <fieldset>
                <legend
                  className="block w-full bg-gray-50 px-5 py-3 text-xs font-medium"
                >
                  Age
                </legend>

                <div className="space-y-2 px-5 py-6">
                  <div className="flex items-center">
                    <input
                      id="3+"
                      type="checkbox"
                      name="age[3+]"
                      className="h-5 w-5 rounded border-gray-300"
                    />

                    <label for="3+" className="ml-3 text-sm font-medium">
                      3+
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="8+"
                      type="checkbox"
                      name="age[8+]"
                      className="h-5 w-5 rounded border-gray-300"
                    />

                    <label for="8+" className="ml-3 text-sm font-medium">
                      8+
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="12+"
                      type="checkbox"
                      name="age[12+]"
                      className="h-5 w-5 rounded border-gray-300"
                    />

                    <label for="12+" className="ml-3 text-sm font-medium">
                      12+
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="16+"
                      type="checkbox"
                      name="age[16+]"
                      className="h-5 w-5 rounded border-gray-300"
                    />

                    <label for="16+" className="ml-3 text-sm font-medium">
                      16+
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      className="text-xs text-gray-500 underline"
                    >
                      Reset Age
                    </button>
                  </div>
                </div>
              </fieldset>
            </div>

            <div
              className="flex justify-between border-t border-gray-200 px-5 py-3"
            >
              <button
                name="reset"
                type="button"
                className="rounded text-xs font-medium text-gray-600 underline"
              >
                Reset All
              </button>

              <button
                name="commit" 
                type="button"
                className="rounded bg-green-600 px-5 py-3 text-xs font-medium text-white"
              >
                Apply Filters
              </button>
            </div>
          </form>
        </details>
          
          <div className="lg:col-span-3">
            <div className="mt-4 grid grid-cols-1 gap-px border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-3">
              <Dialog.Root>
                <Modal
                  id={productModal?.id}
                  brand={productModal?.brand.brandName}
                  description={productModal?.description}
                  failure={productModal?.failure}
                  firtPrice={productModal?.firtPrice}
                  images={productModal?.images}
                  productName={productModal?.productName}
                  ram={productModal?.ram}
                  hardisk={productModal?.hardisk}
                  key={productModal?.id}
                />
                {products.map((value) => {
                  return (
                    <CardProduct
                      key={value.id}
                      id={value.id}
                      images={value.images}
                      description={value.description}
                      productName={value.productName}
                      brand={value.brand.brandName}
                      ram={value.ram}
                      hardisk={value.hardisk}
                      firtPrice={value.firtPrice}
                      failure={value.failure}
                      user={value.user.firstName}
                      buscarDadosProdutos={() =>
                        getAllInformationProductforModal(value.id)
                      }
                    />
                  );
                })}
              </Dialog.Root>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
