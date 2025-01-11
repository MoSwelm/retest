import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio'
import Navbar from './Components/Navbar/Navbar'

const router = createBrowserRouter([
  {path:"", element:<Navbar/>,children:[
    {path:"*", element:<Home/>},
    {path:"home", element:<Home/>},
    {path:"about", element:<About/>},
    {path:"contact", element:<Contact/>},
    {path:"portfolio", element:<Portfolio/>},
  ]},
])

function App() {

  return (
    <>
    <RouterProvider router={router}/>




    </>
  )
}

export default App
