import Home from './components/Home'
import parks from './data/data.json'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'


function App() {

  return (
    <>
      <header>

      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home parks={parks} />}/>
          <Route />
          <Route />
        </Routes>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
