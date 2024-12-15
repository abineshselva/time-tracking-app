import { SessionProvider } from 'next-auth/react';
import '../src/styles/tailwind.css';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

const defaultProductName = 'DailySync';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Navbar productName={defaultProductName} />
      <main className="container mx-auto">
        <Component {...pageProps} />
      </main>
      <Footer />
    </SessionProvider>
  );
}

export default MyApp;
