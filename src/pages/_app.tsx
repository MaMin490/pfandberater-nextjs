import { Provider } from 'react-redux'

import { useStore } from '../store'
import MainLayout from '../components/layouts/mainLayout'

export default function App({ Component, pageProps }) {
    const store = useStore(pageProps.initialReduxState)

    return (
        <Provider store={store}>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </Provider>
    )
}
