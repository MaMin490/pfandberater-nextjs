import App, {Container} from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'

import WithReduxStore from '../lib/with-redux-store'

class MyApp extends App {
render() {
    const {Component, pageProps, reduxStore}  = this.props
   return(
     <Container>
         <Provider store={reduxStore}>
             <div>Hello</div>
         </Provider>
     </Container>
 )   
}
}

export default WithReduxStore(MyApp)