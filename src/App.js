import Home from './Home';
import Contact from './pages/Contact';
import Category from './pages/Category';
import Shop from './pages/Shop';
import Cart from './pages/Cart'
import {Routes ,Route } from 'react-router-dom';
import Account from './pages/Account'
import Page from './pages/Page'
import Checkout from './pages/Checkout'
import Order from './pages/Order'



function App() {

  return (
    <>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/category' element={<Category/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/page' element={<Page/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/order' element={<Order/>}/>

        </Routes>

    </>
  )
    
  
}

export default App;
