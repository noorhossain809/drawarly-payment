import React from "react";
import call from '../../assets/pictures/call.svg'
import mail from '../../assets/pictures/mail.svg'
import whatsapp from '../../assets/pictures/whatsapp.svg'
import instagram from '../../assets/pictures/instragram.svg'
import facebook from '../../assets/pictures/facebok.svg'
import twieter from '../../assets/pictures/twitter.svg'
import youtube from '../../assets/pictures/youtube.svg'

const ProfilePage = () => {
  const electricians = [
    {
      name: "Jhon Doe",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      name: "Jhon Doe",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      name: "Jhon Doe",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      name: "Jhon Doe",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  return (
    <div className=" bg-white md:mt-16 max-w-7xl mx-auto">
      {/* Section 1 */}
      <div className="w-full md:w-[90%] lg:w-[1440px] h-auto md:h-[527px] relative bg-white flex flex-col md:flex-row justify-center items-center md:gap-8">
        {/* Left Profile Card */}
        <div className=" py-8 bg-white rounded-lg border border-[#dbdbdb] flex flex-col justify-center items-center space-y-6">
          <div className="">
            <div className="w-[120px] h-[120px] bg-[#d9d9d9] rounded-full"></div>
          </div>
          <div className="w-full h-auto px-6 flex flex-col justify-center items-center gap-6">
            <div className="w-full flex flex-col justify-center items-center gap-2 font-['Poppins']">
              <div className="flex flex-col items-center gap-1">
                <div className="text-center text-black text-base font-medium ">
                  Jhon Doe
                </div>
                <div className="text-center text-[#3e3e59] text-sm font-normal leading-snug">
                  General Electrician
                </div>
              </div>
              <div className="w-[257px] text-center text-black text-xs font-normal  leading-tight">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </div>
            </div>
            <div className="flex justify-center items-center gap-4">
              {/* WhatsApp Icon */}
              <div className="p-1 bg-[#0083b3] rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex justify-center items-center">
                <img
                  src={whatsapp}
                  alt="WhatsApp"
                  className="md:w-7 md:h-7 filter invert"
                />
              </div>

              {/* Instagram Icon */}
              <div className="p-1 bg-[#0083b3] rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex justify-center items-center">
                <img
                  src={instagram}
                  alt="Instagram"
                  className="md:w-7 md:h-7 filter invert"
                />
              </div>

              {/* Facebook Icon */}
              <div className="p-1 bg-[#0083b3] rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex justify-center items-center">
                <img
                  src={facebook}
                  alt="Facebook"
                  className="md:w-7 md:h-7 filter invert"
                />
              </div>

              {/* Twitter Icon */}
              <div className="p-1 bg-[#0083b3] rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex justify-center items-center">
                <img
                  src={twieter}
                  alt="Twitter"
                  className="md:w-7 md:h-7  filter invert"
                />
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="w-full md:ml-[80px] mt-10 px-4 md:px-0 font-['Poppins']">
          <div className="text-[#282828] md:text-[28px] text-2xl font-bold ">
            About Jon Doe
          </div>
          <div className="w-full md:w-[878px] h-auto mt-[20px] text-justify text-black text-sm md:text-lg font-normal  md:leading-[30px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries.
            <br />
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries.
            <br />
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries.
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className=" flex flex-col py-10 bg-white md:mx-0 mx-4 font-['Poppins'] my-10">
        {/* Heading */}
        <div className="w-full mx-auto">
          <h2 className="text-[#282828] text-[28px] font-medium mb-8">
            Related Electricians
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-8 gap-3 ">
          {electricians.map((electrician, index) => (
            <div
              key={index}
             style={{paddingBottom:'28px'}} className="w-full bg-white rounded-lg border border-gray-300 flex flex-col items-center shadow-sm"
            >
              <div className="w-[111px] h-[111px] mt-6 bg-[#d9d9d9] rounded-full"></div>
              <h3 className="text-black text-lg font-medium  mt-4">
                {electrician.name}
              </h3>
              <p className="text-black text-xs font-normal  leading-tight text-center px-4 mt-2">
                {electrician.description}
              </p>
              <div className="flex gap-4 mt-4">
                <div className="w-9 h-9 bg-[#e8f9ff] rounded-full flex justify-center items-center">
                  <img src={whatsapp} alt="WhatsApp" className="w-5 h-5" />
                </div>
                <div className="w-9 h-9 bg-[#e8f9ff] rounded-full flex justify-center items-center">
                  <img src={whatsapp} alt="Instagram" className="w-5 h-5" />
                </div>
                <div className="w-9 h-9 bg-[#e8f9ff] rounded-full flex justify-center items-center">
                  <img src={facebook} alt="Facebook" className="w-5 h-5" />
                </div>
                <div className="w-9 h-9 bg-[#e8f9ff] rounded-full flex justify-center items-center">
                  <img src={twieter} alt="Twitter" className="w-5 h-5" />
                </div>
              </div>
              <button className="mt-6 w-[163px] h-[38px] bg-[#0083b3] text-white text-sm font-medium font-['Roboto'] rounded-[100px] tracking-tight">
                Contact
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
