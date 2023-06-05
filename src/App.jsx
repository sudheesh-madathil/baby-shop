import { Route, Routes } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Home } from './Home'
import { Cart } from './Addcart';
import {Registration } from './Registration';
import { Product } from './Product';
import { Login } from './Login';
import { CartProvider } from './creatcontext';


function App() {
  return (
    <>
<CartProvider>
    <Routes>
      <Route/>
      <Route path='/'element={ <Home/>}/>
      <Route path='/Home'element={ <Home/>}/>
      <Route path='/Cart'element={ <Cart/>}/>
      <Route path='/Registration'element={ <Registration/>}/>
      <Route path='/Product'element={ <Product/>}/>
      <Route path='/Login'element={ <Login/>}/>
      <Route path='Product/Cart'element={ <Cart/>}/>
 
    </Routes>
    </CartProvider>

    </>
  )
}

export default App
