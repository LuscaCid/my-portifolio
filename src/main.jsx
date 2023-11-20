import React from 'react'
import ReactDOM from 'react-dom/client'
import {Routes } from './routes/'
import { ThemeProvider } from 'styled-components'
import colors from './styles/themeProvider'
import GlobalStyle from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ThemeProvider theme = {colors} >
      <GlobalStyle />
      <Routes />

    </ThemeProvider>
  </React.StrictMode>,
)
