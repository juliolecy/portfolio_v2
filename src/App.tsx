import { createContext, useContext, useState } from 'react'
import Home from './pages/Home'
import { GlobalStyles } from './styles/global'
import { ThemeProvider } from 'styled-components'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import { ThemeContext } from './context/ThemeContext'

function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <>
    <ThemeProvider theme={theme}>
    <GlobalStyles/>
      <Home />
    </ThemeProvider>
   
    </>
  )
}

export default App
