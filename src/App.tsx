import { createContext, useContext, useState } from 'react'
import Home from './pages/Home'
import { GlobalStyles } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { ThemeContext } from './context/ThemeContext'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from './pages/Login'
import Admin from './pages/Admin'
import Edit from './pages/Edit'
import { AuthProvider } from './context/Auth/AuthProvider'
import { RequireAuth } from './context/Auth/RequireAuth'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <BrowserRouter>
      
    <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <ToastContainer/>
    <AuthProvider>
    <Routes>

      <Route element={<Home/>} path='/' />
      <Route element={<Login/>} path='/login' />
      <Route element={<RequireAuth><Admin/></RequireAuth>} path='/admin' />
      <Route element={<Edit/>} path='/projeto/:id' />
    </Routes>
    </AuthProvider>
    </ThemeProvider>
   
    </BrowserRouter>
  )
}

export default App
