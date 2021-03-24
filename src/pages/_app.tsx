import { Provider } from 'react-redux'
import 'antd/dist/antd.css';

import { useStore } from '../store'
import '../css/main.css'
import MainLayout from '../components/layouts/mainLayout'

export default function App({ Component, pageProps }:any) {
    const store = useStore(pageProps.initialReduxState)

    return (
        <Provider store={store}>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </Provider>
    )
}
