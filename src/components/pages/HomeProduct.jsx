import React from "react";
import { Link, useNavigate } from "react-router-dom";
import img1 from '../../assets/home-product-svg/electricity.svg'
import img2 from '../../assets/home-product-svg/water-hand.svg'
import img3 from '../../assets/HomeProudctSvg/hair-dye 1.png'
import img4 from '../../assets/home-product-svg/renovation-home.svg'
import img5 from '../../assets/home-product-svg/material-symbols-light_pest-control.svg'
import img6 from '../../assets/home-product-svg/car.svg'
import img7 from '../../assets/home-product-svg/printer.svg'
import img8 from '../../assets/home-product-svg/facial-treatment.svg'
import img9 from '../../assets/home-product-svg/furniture.svg'
import img10 from '../../assets/home-product-svg/blacksmith.svg'
import img11 from '../../assets/home-product-svg/wedding.svg'
import img12 from '../../assets/home-product-svg/livestock.svg'
import mobileLogo from '../../assets/logo/mobile-logo-2.svg'

const HomeProduct = () => {
  const navigate = useNavigate();

  const products = [
    {
      text: "Electricity, air conditioning and elevators",
      route: "/electricity",
      icon: img1,
    },
    {
      text: "Water and sanitation treatment",
      route: "/electricity",
      icon: img2,
    },
    {
      text: "Dyes and decorations",
      route: "/electricity",
      icon: img3
    },
    {
      text: "Construction and renovations",
      route: "/electricity",
      icon: img4
    },
    {
      text: "Pest control and cleaning",
      route: "/electricity",
      icon: img5
    },
    {
      text: "Car maintenance and transportation",
      route: "/electricity",
      icon: img6
    },
    {
      text: "Electronics, printing and photography",
      route: "/electricity",
      icon: img7
    },
    {
      text: "Cosmetology",
      route: "/electricity",
      icon: img8
    },
    {
      text: "Furniture and furnishings",
      route: "/electricity",
      icon: img9
    },
    {
      text: "Blacksmithing, aluminum and carpentry",
      route: "/electricity",
      icon: img10
    },
    {
      text: "Weddings and events",
      route: "/electricity",
      icon: img11
    },
    {
      text: "Livestock and animals",
      route: "/electricity",
      icon: img12
    },
  ];

  return (
    <div className="lg:mt-10 pb-10 ">
      <div className="flex justify-center items-center mb-4 mt-2 lg:hidden top-0 bottom-0">
        <img src={mobileLogo} alt="mobileLogo" className="w-24 h-24" />
      </div>
      <div className="">
      <div className=" text-[#0083b3] text-center pb-4 text-[18px] font-['Poppins'] font-bold  uppercase lg:hidden"
        
        >
          Our Categories
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-[20px] md:gap-4 gap-2 md:mt-10 max-w-7xl lg:mx-auto md:mx-6 px-4 lg:px-4">
      
        {products.map((product, index) => (
          <div
            key={index}
            onClick={() => navigate(product.route)}
            className="py-8 md:py-6 rounded-lg border-1 lg:px-6 md:px-4 px-2 w-full flex md:flex-col gap-2 items-center md:justify-center transition-all cursor-pointer border-[#0083b3] hover:bg-[#0083b3] group"
          >
            <div className="lg:w-16 lg:h-14 w-12 h-10 lg:mb-4 flex md:justify-center md:items-center">
              <img
                src={product.icon}
                alt={product.text}
                className=" lg:object-cover group-hover:filter group-hover:brightness-0 group-hover:invert"
              />
             
            </div>
            <div className="md:text-base text-xs font-semibold md:text-center font-['Poppins'] text-[#3a4e39] group-hover:text-white">
              {product.text}
            </div>
          </div>
        ))}
      </div>
        <div className="flex justify-center items-center my-10">
          <Link to="verification">
          <button className="text-center px-8 py-3 bg-[#0083b3] rounded-full font-['Poppins'] text-white md:text-lg font-medium ">
            Technical Worker Registration
          </button>
          </Link>
        </div>
    </div>
  );
};

export default HomeProduct;
