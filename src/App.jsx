import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from "react-router-dom"
import Home from './components/Home.jsx'
import About from './components/About.jsx'

function App() {


   return (
      <div className="App">
         <nav className="nav">
            <Link to="/" className="nav-item">Home Page</Link>
            <Link to="/about" className="nav-item">About Page</Link>
         </nav>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
         </Routes>
      </div>
   )

}

export default App
