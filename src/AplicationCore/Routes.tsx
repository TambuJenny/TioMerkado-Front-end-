import { Route, Routes, BrowserRouter } from 'react-router-dom';
import App from "../App";
import { CreateAccount } from '../UI/Pages/CreateAccount';
import { Login } from '../UI/Pages/Login';
import { Product } from '../UI/Pages/Product';

export default function RoutesConf() {
  return (
   <BrowserRouter>
   <Routes>
        <Route index element = {<App/>} />
        <Route path='/newAccount' element={<CreateAccount/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/support' element={<Product/>}/>
   </Routes>
   </BrowserRouter>
  );
}