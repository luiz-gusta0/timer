import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { defaultTheme } from './Styles/themes/Default'

export function App() {
  

  return (
    <ThemeProvider theme={defaultTheme}>
    <BrowserRouter>
        <Router/>
    </BrowserRouter>
    </ThemeProvider>
  )

}


