import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import GlobalStyle from './global/Styles'

import light from './global/light'
import dark from './global/themes/dark'


export const App:React.FC = () => {
  const [theme, setTheme] = useState(dark)

  const toggleTheme = () =>  setTheme(theme.title === 'light' ? dark : light)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}

