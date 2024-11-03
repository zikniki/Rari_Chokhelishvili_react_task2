import { useState } from 'react'
import './App.css'
import HeaderPart from './HeaderPart'
import FooterPart from './FooterPart'
import MainPart from './MainPart'


function App() {


  return (
    <div id='root'>
      <HeaderPart />
      <MainPart />
      <FooterPart />
    </div>

  )
}

export default App
