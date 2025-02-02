"use client";

import { useState } from "react";
import contact from "../../assets/contact/contact.png";
import mobileLogo from "../../assets/logo/mobile-logo-2.svg";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    role: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-center items-center  md:hidden top-0 bottom-0">
        <img src={mobileLogo} alt="mobileLogo" className="w-24 h-24" />
      </div>
      <section className="mt-16 pb-24 z-10">
        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-24 items-center z-10">
            {/* Contact Form */}
            <div className=" bg-[#DADCE34D] rounded-md p-6 md:col-span-2 col-span-3">
              <div className="flex space-x-4">
                <h2 className="text-2xl font-['Poppins'] text-gray-800 mb-4">
                  Contact Us
                </h2>
              </div>
              <p className="text-gray-600 mb-6 font-['Poppins']">You can reach us anytime</p>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    className="w-full border border-gray-300 rounded-md p-2"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    className="w-full border border-gray-300 rounded-md p-2"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    className="w-full border border-gray-300 rounded-md p-2 pl-10"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 w-5 h-5`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
                    <path d="M2 6l10 7 10-7" />
                  </svg>
                </div>
                <div className="flex items-center bg-white border border-gray-300 rounded-md overflow-hidden">
                  {/* Country Code Dropdown */}
                  <div className="flex items-center bg-white px-3">
                    <select
                      name="countryCode"
                      className="bg-transparent focus:outline-none text-gray-800"
                    >
                      <option value="+92">+92</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      {/* Add more country codes as needed */}
                    </select>
                    <span className="text-gray-400">|</span>
                  </div>

                  {/* Phone Number Input */}
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    className="flex-1 py-2 bg-white focus:outline-none"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="How did you hear about us?"
                  rows="4"
                  className="w-full border border-gray-300 rounded-md p-2"
                  value={formData.message}
                ></textarea>
                <div className="flex items-start">
                  <input type="checkbox" className="h-4 w-4 mt-1" />
                  <p className="text-sm text-gray-600 ml-2">
                    By contacting us, you agree to our{" "}
                    <a href="#" className="text-[#0083b3f1] font-bold">
                      terms of services
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-[#0083b3f1] font-bold">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0083b3] text-white py-2 rounded-md hover:bg-[#0083b3f1] transition font-['Poppins']"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Illustration and Description */}
            <div className="col-span-3">
              <div className="flex flex-col items-center justify-center">
                <img
                  src={contact} // Replace with the path to your illustration
                  alt="Illustration"
                  className="max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
