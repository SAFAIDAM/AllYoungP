

import React, { useState } from "react";
import allyoungjars from "../assets/allyoungjars.png";
import button from "../assets/button-2025.png";
import { HiArrowRight } from "react-icons/hi2";
import gsap from "gsap";
import { useRef, useEffect } from "react";

function Hero() {

  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const h1Ref = useRef(null);

  
  useEffect(() => {
    gsap.to(h1Ref.current, {
      y: offsetY * 0.1, 
      ease: "power1.out",
    });
  }, [offsetY]);

  return (
    <>
      <divn className="text-[#452E5D] ">
        <div>
          <h1 ref={h1Ref} className="custom-font sm:mt-10 sm:text-6xl sm:w-[800px] sm:text-center sm:ml-auto sm:mr-auto text-center w-[254px] mr-auto ml-auto mt-5 text-xl">
            Your Path to Healthy Glowing Skin Begins Here{" "}
          </h1>
        </div>
        <div className="sm:flex sm:justify-center sm:mt-10 sm:justify-around sm:gap-56 sm:relative sm:top-[100px] ">
          <div className="flex items-center ml-6 mt-4 gap-1 ">
            <svg
              className="sm:hidden"
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="70"
              viewBox="0 0 7 70"
              fill="none"
            >
              <line
                x1="3"
                y1="5.1333"
                x2="2.99999"
                y2="69.9371"
                stroke="#452E5D"
              />
              <ellipse
                cx="3.5"
                cy="3.89877"
                rx="3.5"
                ry="3.83627"
                fill="#452E5D"
              />
            </svg>
            <svg
              className="hidden sm:block"
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="112"
              viewBox="0 0 7 112"
              fill="none"
            >
              <line
                x1="3.5"
                y1="0.708984"
                x2="3.49999"
                y2="112"
                stroke="#452E5D"
              />
              <ellipse
                cx="3.5"
                cy="2.48101"
                rx="3.5"
                ry="2.48101"
                fill="#452E5D"
              />
            </svg>
            <p className="sm:w-[349px]  sm:text-xl w-[207px] text-sm">
              Explore our range of nourishing products designed to enhance your
              natural beauty
            </p>
          </div>
          <div  className="flex items-center ml-36 mt-3 mb-6 gap-1">
            <button 
               className="border-[3px] border-[#452E5D] rounded-full w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]">
              <HiArrowRight className="sm:w-[39px] sm:h-[39px] mr-auto ml-auto w-[30px] h-[30px] hover:translate-x-2 transition-[0.3s] hover:transition-[3s]" />
            </button>
            <p className="sm:text-xl text-xs">View All Products </p>
          </div>
        </div>
        <div className="sm:mt-[-100px]">
          <div className="sm:mr-auto sm:ml-auto w-[294px] h-[268px] ml-auto mr-auto sm:w-[543px] sm:h-[494px]">
            <img  style={{transform: `translateY(${offsetY * 0.2}px)`}} src={allyoungjars} alt="" />
          </div>
          <div  onMouseMove={handleMouseMove}  className="sm:absolute sm:bottom-[-100px] sm:left-[400px] relative bottom-[90px]">
            <button style={{
                transform: `translate(${cursorPosition.x * 0.03}px, ${cursorPosition.y * 0.03}px)`,
              }}
              className="bg-[#EDE8E5] border border-2 border-[#452E5D] rounded-full sm:w-[173px] sm:h-[173px]  w-[97px] h-[97px]"
            >
              <img 
                className="mr-auto ml-auto w-[84px] sm:w-[140px]"
                src={button}
                alt=""
              />
            </button>
          </div>
        </div>
      </divn>
    </>
  );
}

export default Hero;
