import { createContext, useContext, useState } from 'react'
import Home from './pages/Home'
import { GlobalStyles } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { ThemeContext } from './context/ThemeContext'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Admin from './pages/Admin'

function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <Routes>

      <Route element={<Home/>} path='/' />
      <Route element={<Admin/>} path='/admin' />
    </Routes>
    </ThemeProvider>
   
    </BrowserRouter>
  )
}

export default App
