
// Global styles (styled-components)
import  GlobalStyles from "@styles/global";

// Styled-components
import { ThemeProvider } from "styled-components";

// Chakra UI
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import theme from "../styles/theme";

const MyApp = ({ Component, pageProps }) => {
  
  return (
    <ThemeProvider theme={theme}>

      <ChakraProvider theme={extendTheme(theme)}>

        <GlobalStyles />
        
        <Component {...pageProps} />

      </ChakraProvider>

    </ThemeProvider>
  )
}

export default MyApp;
