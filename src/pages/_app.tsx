/* eslint-disable import/no-unresolved */
import { Provider } from '@cosmo-au/design-system';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';

import Footer from '../components/Footer';
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider>
      <DefaultSeo
        openGraph={{
          title: 'ihostme - Airbnb, Stayz & Booking.com',
          description: 'ihostme are the go-to people for managing the rental of your holiday home and ALL your hosting and property management needs.',
          type: 'website',
          locale: 'en_AU',
          url: 'https://ihostme.com.au',
          site_name: 'ihostme',
          images: [
            {
              url: 'https://cosmogroup.io/images/general/01.jpg',
              alt: 'Cosmo',
            },
          ],
        }}
        titleTemplate={'%s - ihostme'}
      />

      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;