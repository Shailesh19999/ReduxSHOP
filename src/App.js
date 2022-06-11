// import { Home } from '@material-ui/icons'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Category from './Category'

import CardDetails from './CardDetails'




function App() {
  return (
    <>
   
   
   
  
    <Routes>

        <Route exact path="/" element={<Category/>}/>
        
        <Route exact path="/cart/:id" element={<CardDetails/>}/>
       
        {/* <Route exact path="/about" element={<About/>}/>
        <Route exact path="/services" element={<Services/>}/>
        <Route exact path="/contact" element={<Contact/>}/> */}
    </Routes>
    {/* <Footer/> */}

    </>
  )
}

export default App
