import { AppProps } from 'next/app'
import React from "react";
import GlobalStyle from "../styles/global-styles";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}

export default App;