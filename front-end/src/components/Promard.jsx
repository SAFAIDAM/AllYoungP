import React from "react";
import designP from "../assets/footer-products.png";
import sunflower from "../assets/imoji-orange.png";
import { HiArrowDownLeft } from "react-icons/hi2";

function Promard() {
  return (
    <>
      <div className="text-[#452E5D] ">
        <h1  className="custom-font sm:text-4xl text-center mt-20 mb-10 text-[#452E5D] ">Explore Our brand deigned</h1>
        <section className="sm:flex sm:justify-center mt-28">
          <img src={designP} className="sm:w-[582px] sm:h-[651px] w-[282px] h-[325px] ml-5" alt="" />
          <div className="sm:mt-96 sm:ml-10 ml-4 mt-11">
            <div className="flex gap-44 ">
            <button className="border-[3px] border-[#452E5D] rounded-full w-[56px] h-[56px] sm:w-[100px] sm:h-[100px] hover:">
              <HiArrowDownLeft className="sm:w-[39px] sm:h-[39px] mr-auto ml-auto w-[30px] h-[30px] hover:translate-x-1 hover:transition-[3s]" />
            </button>
              <img src={sunflower} className="hidden sm:block sm:w-[63px] sm:h-[63px]" alt="" />
            </div>
            <h1 className="custom-font sm:text-4xl sm:w-[519px] sm:mt-4 sm:text-left text-center  w-[282px] text-sm mt-4">
              Embark on a journey of self-care with our brand-new skincare line
            </h1>
          </div>
        </section>
      </div>
    </>
  );
}

export default Promard;
