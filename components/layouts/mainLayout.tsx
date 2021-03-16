import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import {theme} from "../../static/global/colors"
import Header from '../includes/header'
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${theme.colors.grey}
  }
`

export default function MainLayout(props) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Head>
                    <title>Pfandberater</title>
                    <link rel="stylesheet" href="/static/css/styles.css"></link>
                </Head>
                <div>
                    <Header />
                    <div></div>
                    {props.children}
                </div>
            </ThemeProvider>
        </>
    )
}
