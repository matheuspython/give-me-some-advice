import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { SectionTop } from './components/SectionTop'
import GlobalStyle from './global/Styles'

import light from './global/light'
import dark from './global/themes/dark'
import { AdviceList } from './components/AdviceList/Index'


export const App:React.FC = () => {
  const [theme, setTheme] = useState(dark)

  const toggleTheme = () =>  setTheme(theme.title === 'light' ? dark : light)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <SectionTop />
      <AdviceList />
    </ThemeProvider>
  )
}

