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
interface LayoutProps {
   children: React.ReactNode;
}

export default function MainLayout(props: LayoutProps): JSX.Element {
                 return (
                   <>
                     <GlobalStyle />
                     <ThemeProvider theme={theme}>
                       <Head>
                         <title>Pfandberater</title>
                         <link
                           rel="stylesheet"
                           href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                         />
                       </Head>
                       <div>
                         <Header />

                         {props.children}
                       </div>
                     </ThemeProvider>
                   </>
                 );
               }
