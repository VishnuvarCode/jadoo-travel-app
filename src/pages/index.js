import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Destinations from '../components/Destinations';
import BookingSteps from '../components/BookingSteps';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jadoo - Travel Landing Page</title>
        <meta name="description" content="Best travel destinations" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Services />
        <Destinations />
        <BookingSteps />
        <Testimonials />
        <Partners />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}
