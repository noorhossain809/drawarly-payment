import React from "react";
import { useNavigate } from "react-router-dom";
import call from '../../assets/pictures/call.svg'
import whatsapp from '../../assets/pictures/whatsapp.svg'
import filter from '../../assets/pictures/filter.svg'
import arrow from '../../assets/pictures/left-arrow.svg'
import mobileLogo from '../../assets/logo/mobile-logo-2.svg'


const GeneralElectricity = () => {
  const navigate = useNavigate();

  const electricians = Array(8).fill({
    name: "Jhon Doe",
    description: "Lorem Ipsum is simply dummy text.",
  });

  return (
    <div
      className="max-w-7xl mx-auto lg:my-16 bg-white"
    >
      <div className="flex justify-center items-center mb-6 mt-2 lg:hidden top-0 bottom-0">
                    <img src={mobileLogo} alt="mobileLogo" className="w-24 h-24" />
                  </div>
      {/* Header Section */}
      <div className="text-center md:block hidden">
        <div className="w-full text-[#0083b3] text-lg font-normal font-['Poppins'] uppercase leading-5 tracking-wide">
          Our Skilled People
        </div>
        <div className="w-full mt-2 text-[#2c2e33] md:text-[38px] text-3xl font-semibold leading-[50px] font-['Poppins']">
          General Electricity
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="md:block hidden ">
      <div className="flex justify-between items-center w-full md:mt-8 lg:px-6 px-10">
        <div
          className="md:w-[367px] max-w-md py-3 rounded-full border border-[#b2b2b2] flex items-center px-6"
        >
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full bg-transparent outline-none text-sm text-black"
          />
        </div>
        <div className="flex items-center gap-2 text-black md:text-lg font-normal font-['Poppins'] leading-7 tracking-wide">
          Filter By
          <img
            src={filter}
            alt="Filter"
            className="md:w-11 md:h-11 w-8 h-8 relative overflow-hidden"
          />
        </div>
      </div>
      </div>
      <div className="md:hidden">
      <div className="space-y-4 w-full md:px-0 px-6">
        
        <div className="flex items-center justify-between gap-2 text-black md:text-lg font-normal font-['Poppins'] leading-7 tracking-wide">
          
          <div className="bg-[#0083B3] p-2 rounded-full ">
         
          <img
            src={arrow}
            alt="arrow"
            className=" w-6 h-6 relative overflow-hidden"
          />
          </div>
          <div className="flex items-center gap-2 text-sm text-black font-['Poppins'] ">
          Filter By
          <img
            src={filter}
            alt="Filter"
            className=" w-8 h-8 relative overflow-hidden"
          />
          </div>
        </div>
        <div
          className=" max-w-md py-3 rounded-full border border-[#b2b2b2] flex items-center px-6"
        >
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full bg-transparent outline-none text-sm text-black"
          />
        </div>
      </div>
      </div>

      {/* Electricians Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 gap-3 mt-8 lg:mx-0 md:mx-4 px-4 font-['Poppins'] mb-24">
        {electricians.map((electrician, index) => (
          <div
            key={index}
            onClick={() => navigate("/profilePage")} // Navigate to the same route
            className="py-4 bg-white rounded-lg border border-gray-300 flex flex-col items-center shadow-sm cursor-pointer hover:shadow-md"
          >
            <div className="lg:w-[111px] lg:h-[111px] md:w-[80px] md:h-[80px] w-[60px] h-[60px] md:mt-6 bg-[#d9d9d9] rounded-full"></div>
            <h3 className="mt-4 text-black text-base font-medium ">
              {electrician.name}
            </h3>
            <p className="mt-2 text-black text-xs font-normal text-center leading-tight md:px-4 px-1">
              {electrician.description}
            </p>
            <div className="flex gap-4 mt-4">
              <div className=" lg:p-2 p-1 bg-white rounded-full shadow-sm flex justify-center items-center">
                <img
                  src={whatsapp}
                  alt="WhatsApp"
                  className="w-7 h-7"
                />
              </div>
              <div className="lg:p-2 p-1 bg-white rounded-full shadow-sm flex justify-center items-center">
                <img src={call} alt="Phone" className="w-5 h-5" />
              </div>
            </div>
            <button className="mt-6 px-5 py-1 bg-[#0083b3] text-white text-sm font-medium rounded-[100px]">
              More Info
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneralElectricity;
