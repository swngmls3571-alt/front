import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './compnents/header.jsx'
import Addmain from './compnents/addmain.jsx'
import Product from './compnents/product.jsx'
import Member from './compnents/member.jsx'
import Login from './compnents/login.jsx'
import Cart from './compnents/cart.jsx'
import Mypage from './compnents/mypage.jsx'
import Search from './compnents/search.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header/>
      
      <Routes>
        <Route path= '/' element={<Addmain/>}/>
        <Route path= '/search' element={<Search/>}/>
        <Route path= '/member' element={<Member/>}/>
        <Route path= '/login' element={<Login/>}/>
        <Route path= '/product' element={<Product/>}/>
        <Route path= '/cart' element={<Cart/>}/>
        <Route path= '/mypage' element={<Mypage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
