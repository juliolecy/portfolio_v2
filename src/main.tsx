import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ToggleProvider } from './context/ThemeContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <ToggleProvider>
      <App />
    </ToggleProvider>
  </React.StrictMode>,
)
