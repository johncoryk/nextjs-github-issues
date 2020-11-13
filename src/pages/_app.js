import Layout from '../components/Layout';
import { ThemeProvider } from '@emotion/react';
import theme from '../styles/theme';

import '../styles/reset.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
