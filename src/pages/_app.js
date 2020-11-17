import { ThemeProvider } from '@emotion/react';

import Layout from '../components/Layout';
import theme from '../styles/theme';

import '../styles/reset.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
