import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cardproducts from './components/Cardproducts';
import Promard from './components/Promard';
import Footer from './components/Footer';

function App() {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 800,
      smooth: 'easeInOutQuad', // You can choose different easing functions
    });
  };

  return (
    <>
      <Navbar />
      <Hero />
      {/* Add smooth scrolling to the welcome section */}
      <div className="bg-[#3B3F6C] lg:bottom-0 relative bottom-[96px]">
        <div>
          {/* Use Link to add smooth scrolling to the welcome section */}
          <Link to="welcomeSection" smooth duration={800}>
            <h1 className="custom-font sm:text-[45px] sm:w-[1211px] text-[16px] text-center ml-auto mr-auto sm:pt-20 sm:pb-20 text-[#D9D3E8] pt-20 pb-20">
              Welcome to a world where skincare meets indulgence At allYoung we believe in the transformative power of self-care
            </h1>
          </Link>
        </div>
      </div>
      <Cardproducts />
      <Promard />
      <Footer />
      {/* Add a button to scroll back to the top smoothly */}
      <button className="scroll-to-top" onClick={scrollToTop}>
      </button>
    </>
  );
}

export default App;
