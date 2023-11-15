import { ThemeProvider } from "styled-components";
import { BrowserRouter } from 'react-router-dom'

import { Router } from "./Router";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Provider } from "./context/Context";

export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />

            <Provider>
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </Provider>
        </ThemeProvider>
    )
}

