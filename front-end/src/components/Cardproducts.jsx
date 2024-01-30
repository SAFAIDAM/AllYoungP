import React, { useState } from "react";
import softskin from "../assets/softskin-dispanser.png";
import imojiPink from "../assets/imoji-pink.png";
import yellowImoji from "../assets/imoji-yellow.png";
import jarsProducts from "../assets/jars-products.png";

function Cardproducts() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <div onMouseMove={handleMouseMove}>
        <h1 className="custom-font sm:text-4xl text-center mt-10 mb-10 text-[#452E5D]">
          Take Look At Our new Products
        </h1>
        <div className="text-[#452E5D] sm:flex justify-center">
          <section className="">
            <img
              src={softskin}
              className="sm:w-[582px] sm:h-[651px]  w-[282px] h-[325px] ml-auto mr-auto"
              alt=""
              style={{
                transform: `translate(${cursorPosition.x * 0.01}px, ${cursorPosition.y * 0.01}px)`,
              }}
            />
            <p className="custom-font sm:text-3xl sm:w-[624px] sm:mt-4 w-[282px] text-center text-sm mt-4 ml-11">
              Pamper your skin with the hydrating embrace of botanical extracts
              enriched with the soothing essence of chamomile and the
              revitalizing touch of vitamin C
            </p>
            <div className="flex sm:gap-[290px] mb-9 gap-20 mt-7 justify-center">
              <button className="bg-[#BCAAE0] hover:bg-[#F4DD9A] hover:transition-[3s] transition-[3s]  rounded-lg sm:text-[24px] sm:pl-14 sm:pr-14 pl-9 pr-9">
                Buy now
              </button>
              <img src={imojiPink} className="w-[39px] sm:w-[50px]" alt="" />
            </div>
          </section>
          <div></div>
          <section className="">
            <img
              src={jarsProducts}
              className="sm:hidden w-[282px] h-[325px] mr-auto ml-auto"
              alt=""
              style={{
                transform: `translate(${cursorPosition.x * 0.01}px, ${cursorPosition.y * 0.01}px)`,
              }}
            />
            <p className="custom-font sm:text-3xl sm:w-[624px] sm:mt-4  w-[282px] text-center  text-sm mt-4 ml-11">
              Pamper your skin with the hydrating embrace of botanical extracts
              enriched with the soothing essence of chamomile and the
              revitalizing touch of vitamin C
            </p>
            <div className="flex sm:gap-[290px] gap-20 mt-7 mb-9 justify-center">
              <button className="bg-[#BCAAE0] hover:bg-[#F4DD9A] hover:transition-[3s] transition-[3s] rounded-lg sm:text-[24px] sm:pl-14 sm:pr-14 pl-9 pr-9">
                Buy now
              </button>
              <img src={yellowImoji} className="w-[39px] sm:w-[50px]" alt="" />
            </div>
            <img
              src={jarsProducts}
              className="hidden sm:block"
              alt=""
              style={{
                transform: `translate(${cursorPosition.x * 0.01}px, ${cursorPosition.y * 0.01}px)`,
              }}
            />
          </section>
        </div>
      </div>
    </>
  );
}

export default Cardproducts;
