import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#3B3F6C] pb-36 pt-36 mt-36 ">
      <div>
        <h1 className="custom-font sm:text-[45px] sm:w-[1211px] text-[16px]  text-center ml-auto mr-auto  text-[#D9D3E8] pt-20">
          idamahamedsafa@gmailcom
        </h1>
        <p className="sm:text-[30px] sm:w-[1211px] text-[16px]  text-center ml-auto mr-auto text-[#D9D3E8] font-thin">
          Elevate your skin care with all young
        </p>
        <div className="flex gap-10 justify-center mt-3">
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M1 20C1 11.0433 1 6.56498 3.78248 3.78248C6.56498 1 11.0433 1 20 1C28.9566 1 33.435 1 36.2176 3.78248C39 6.56498 39 11.0433 39 20C39 28.9566 39 33.435 36.2176 36.2176C33.435 39 28.9566 39 20 39C11.0433 39 6.56498 39 3.78248 36.2176C1 33.435 1 28.9566 1 20Z"
                stroke="#D9D3E8"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M29 20C29 24.9706 24.9706 29 20 29C15.0294 29 11 24.9706 11 20C11 15.0294 15.0294 11 20 11C24.9706 11 29 15.0294 29 20Z"
                stroke="#D9D3E8"
                strokeWidth="1.5"
              />
              <path
                d="M31.0156 9H30.9976"
                stroke="#D9D3E8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="39"
              viewBox="0 0 39 39"
              fill="none"
            >
              <path
                d="M1 38L16.5162 22.4838M16.5162 22.4838L1 1H11.2778L22.4838 16.5162M16.5162 22.4838L27.7222 38H38L22.4838 16.5162M38 1L22.4838 16.5162"
                stroke="#D9D3E8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
            >
              <path
                d="M19 37C28.9411 37 37 28.9411 37 19C37 9.05887 28.9411 1 19 1C9.05887 1 1 9.05887 1 19C1 28.9411 9.05887 37 19 37Z"
                stroke="#D9D3E8"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M19.9206 17L11.8832 35"
                stroke="#D9D3E8"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M15.9574 27.2301C17.0154 27.725 18.1863 28 19.4183 28C24.1346 28 27.958 23.9705 27.958 19C27.958 14.0294 24.1346 10 19.4183 10C14.7019 10 10.8785 14.0294 10.8785 19C10.8785 20.6395 11.2947 22.1763 12.0215 23.5"
                stroke="#D9D3E8"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
