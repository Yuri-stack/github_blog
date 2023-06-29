import { ThemeProvider } from "styled-components";
import { BrowserRouter } from 'react-router-dom'

import { Router } from "./Router";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { PostsProvider } from "./context/PostsContext";

export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />

            <PostsProvider>
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </PostsProvider>
        </ThemeProvider>
    )
}

