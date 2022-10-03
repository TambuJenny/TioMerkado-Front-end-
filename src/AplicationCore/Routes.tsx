import { Route, Routes, BrowserRouter } from 'react-router-dom';
import App from "../App";
import { CreateAccount } from '../UI/Pages/CreateAccount';

export default function RoutesConf() {
  return (
   <BrowserRouter>
   <Routes>
        <Route index element = {<App/>} />
        <Route path='/newAccount' element={<CreateAccount/>}/>
   </Routes>
   </BrowserRouter>
  );
}