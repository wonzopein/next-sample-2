import React, { ReactNode } from 'react'
import Head from 'next/head'
import LayoutHead from "./LayoutHead";
import LayoutFooter from "./LayoutFooter";
import styled from "styled-components";

const StyledLayout = styled.div`

`;

const StyledLayoutBody = styled.div`

`;

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
    <StyledLayout>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            {/*<link rel="stylesheet" href="//fonts.googleapis.com/earlyaccess/notosanskr.css"/>*/}
        </Head>

        <header>
            <LayoutHead />
        </header>

        <StyledLayoutBody>
            {children}
        </StyledLayoutBody>

        <footer>
            <LayoutFooter />
        </footer>
    </StyledLayout>
)

export default Layout
