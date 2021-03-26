import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import 'antd/dist/antd.css';

import { useStore } from '../store';
import '../css/main.css';
import MainLayout from '../components/layouts/mainLayout';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}
