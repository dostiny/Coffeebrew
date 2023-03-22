import React, { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Router from './Router';
import './App.css';

function App() {
  const win = window.location.pathname;
  console.log(win);
  useEffect(() => {}, []);
  return (
    <div className="App">
      <Navbar />
      <ContentContainer>
        <Router />
      </ContentContainer>
      {window.location.pathname === '/' && win.length > 0 ? null : <Footer />}
    </div>
  );
}

const ContentContainer = tw.div`mt-10vh min-h-90vh flex flex-col`;
export default App;
