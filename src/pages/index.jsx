import React from 'react';

import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import AboutContainer from '../containers/about/aboutContainer';
import HomeContainer from '../containers/home/homeContainer';

function Home() {
  return (
    <>
      <Header />
      <HomeContainer />
      <AboutContainer />
      <Footer />
    </>
  );
}

export default Home;
