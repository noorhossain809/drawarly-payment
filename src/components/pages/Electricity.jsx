import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from '../../assets/Electricity, Air conditioning and Elevators/pepicons-pencil_electricity-circle.svg'
import img2 from '../../assets/Electricity, Air conditioning and Elevators/exchange 1.svg'
import img3 from '../../assets/Electricity, Air conditioning and Elevators/system 1.svg'
import img4 from '../../assets/Electricity, Air conditioning and Elevators/air-conditioner 2.svg'
import img5 from '../../assets/Electricity, Air conditioning and Elevators/repair 1.svg'
import img6 from '../../assets/Electricity, Air conditioning and Elevators/exchange 1.svg'

const Electricity = () => {
  const navigate = useNavigate();

  const subCategories = [
    {
      title: "General electricity",
      route: "/generalElectricity",
      icon: img1, // Replace with actual path
    },
    {
      title: "Electrical appliances repair",
      route: "/generalElectricity",
      icon: img2 // Replace with actual path
    },
    {
      title: "Central air conditioning maintenance",
      route: "/generalElectricity",
      icon: img3 // Replace with actual path
    },
    {
      title: "Unit air conditioning maintenance",
      route: "/generalElectricity",
      icon: img4
    },
    {
      title: "Elevator maintenance",
      route: "/generalElectricity",
      icon: img5 // Replace with actual path
    },
    {
      title: "Buying and selling used appliances",
      route: "/generalElectricity",
      icon: img6 // Replace with actual path
    },
  ];

  return (
    <div className="flex flex-col items-center w-full md:my-16 bg-white ">
      {/* Header Section */}
      <div className="text-center mb-10">
        <div className="text-[#0083b3] text-2xl font-normal font-['Poppins'] uppercase leading-5 tracking-[4.76px]">
          Sub Categories
        </div>
        <div className="mt-4 text-[#2c2e33] md:text-4xl text-xl md:px-0 px-4 font-semibold font-['Poppins'] md:leading-[50px]">
          Electricity, Air conditioning and Elevators
        </div>
      </div>

      {/* Subcategories Section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-5 gap-2 max-w-7xl md:mx-auto mx-6 ">
        {subCategories.map((category, index) => (
          <div
            key={index}
            onClick={() => navigate(category.route)} // Navigate to route
            className="flex flex-col items-center justify-center px-8 py-8 rounded-xl border-2 border-[#0083b3] hover:bg-[#0083b3] group transition-all cursor-pointer"
          >
            <div className="w-16 h-16 mb-6 rounded-full flex items-center justify-center">
              <img
                src={category.icon}
                alt={category.title}
                className="w-full h-full object-contain group-hover:filter group-hover:brightness-0 group-hover:invert"
              />
            </div>
            <div className="md:text-base text-sm font-semibold text-center font-['Poppins'] text-[#3a4e39] group-hover:text-white">
              {category.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electricity;
