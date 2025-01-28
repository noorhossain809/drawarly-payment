import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from '../../assets/HomeProudctSvg/healthicons_electricity-outline (2).svg'
import img2 from '../../assets/HomeProudctSvg/healthicons_water-sanitation-outline.png'
import img3 from '../../assets/HomeProudctSvg/hair-dye 1.png'
import img4 from '../../assets/HomeProudctSvg/renovation 1.png'
import img5 from '../../assets/HomeProudctSvg/sanitizer 1.png'
import img6 from '../../assets/HomeProudctSvg/ant-design_car-outlined.png'
import img7 from '../../assets/HomeProudctSvg/printer 1.png'
import img8 from '../../assets/HomeProudctSvg/facial-treatment 1.png'
import img9 from '../../assets/HomeProudctSvg/map_furniture-store.png'
import img10 from '../../assets/HomeProudctSvg/blacksmith 1.png'
import img11 from '../../assets/HomeProudctSvg/arch 1.png'
import img12 from '../../assets/HomeProudctSvg/livestock 1.png'

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
    <div className="md:mt-10 pb-10 ">
      <div className="">
      <div className=" text-[#0083b3] text-center pb-6 text-[18px] font-['Poppins'] font-bold  uppercase md:hidden"
        
        >
          Our Categories
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-[20px] md:mt-10 max-w-7xl md:mx-auto mx-6">
      
        {products.map((product, index) => (
          <div
            key={index}
            onClick={() => navigate(product.route)}
            className="py-2 md:py-6 rounded-xl border-2 px-6 w-full flex flex-col items-center justify-center text-center transition-all cursor-pointer border-[#0083b3] hover:bg-[#0083b3] group"
          >
            <div className="w-16 h-16 mb-4 rounded-full flex justify-center items-center">
              <img
                src={product.icon}
                alt={product.text}
                className="w-full h-full object-cover rounded-full group-hover:filter group-hover:brightness-0 group-hover:invert"
              />
            </div>
            <div className="text-base font-semibold font-['Poppins'] text-[#3a4e39] group-hover:text-white">
              {product.text}
            </div>
          </div>
        ))}
      </div>
        <div className="flex justify-center items-center my-10">
          <button className="text-center px-8 py-3 bg-[#0083b3] rounded-md font-['Poppins'] text-white md:text-lg font-medium ">
            Technical Worker Registration
          </button>
        </div>
    </div>
  );
};

export default HomeProduct;
