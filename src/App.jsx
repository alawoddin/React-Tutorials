
// import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Banner from './Pages/Banner';
import Categories from './Pages/Categories';
import Featured from './Pages/Featured';
import Home from './Pages/Home';



function App() {




  return (
    <>

<BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/categories' element={<Categories />} />
    <Route path='/featured' element={<Featured />} />
  </Routes>
</BrowserRouter>


  





    </>
  )
}

export default App
