import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cardproducts from './components/Cardproducts';
import Promard from './components/Promard';
import Footer from './components/Footer';
import { HiArrowUp } from "react-icons/hi2";
import gsap from "gsap";
import { useRef, useEffect , useState} from 'react';


function App() {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 800,
      smooth: 'easeInOutQuad', 
    });
  };

  const h1Ref = useRef(null);
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset)
  
  useEffect(() => {
    gsap.to(h1Ref.current, {
      y: offsetY * 0.1, 
      ease: "power1.out",
    });
  }, [offsetY]);

  return (
    <>
      <Navbar />
      <Hero />
      {/* Add smooth scrolling to the welcome section */}
      <div className="bg-[#3B3F6C] lg:bottom-0 relative bottom-[96px]">
        <div>
          {/* Use Link to add smooth scrolling to the welcome section */}
          <Link to="welcomeSection" smooth duration={800}>
            <h1 ref={h1Ref} className="custom-font sm:text-[45px] sm:w-[1211px] text-[16px] text-center ml-auto mr-auto sm:pt-20 sm:pb-20 text-[#D9D3E8] pt-20 pb-20">
              Welcome to a world where skincare meets indulgence At allYoung we believe in the transformative power of self-care
            </h1>
          </Link>
        </div>
      </div>
      <Cardproducts />
      <Promard />
      <button className="scroll-to-top border-[3px] border-[#452E5D] rounded-full w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] ml-10 mt-11 fixed bottom-10 right-10 z-50" onClick={scrollToTop}>
      <HiArrowUp className="sm:w-[39px] sm:h-[39px] mr-auto ml-auto w-[30px] h-[30px] hover:translate-y-2 transition-[0.3s] hover:transition-[3s]" />
      </button>
      <Footer />
    </>
  );
}

export default App;
