import { createContext, useContext, useState } from 'react'
import Home from './pages/Home'
import { GlobalStyles } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { ThemeContext } from './context/ThemeContext'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from './pages/Login'
import Admin from './pages/Admin'
import Edit from './pages/Edit'

function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <Routes>

      <Route element={<Home/>} path='/' />
      <Route element={<Login/>} path='/login' />
      <Route element={<Admin/>} path='/admin' />
      <Route element={<Edit/>} path='/projeto/:title' />
    </Routes>
    </ThemeProvider>
   
    </BrowserRouter>
  )
}

export default App
