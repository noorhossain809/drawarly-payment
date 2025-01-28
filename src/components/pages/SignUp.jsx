import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [isChecked, setIsChecked] = useState({
    governorate: false,
    terms: false,
  });

  const navigate = useNavigate();

  const toggleCheckbox = (key) => {
    setIsChecked((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleRegistration = () => {
    navigate("/verification");
  };

  return (
    <div style={{ marginBottom: "120px" }} className="flex justify-center items-center mt-16">
      <div className="w-[360px]">
        <h2 className="text-[#0f1728] text-3xl font-normal font-['Inter'] leading-[38px] mb-6">
          Create an account
        </h2>
        <div className="space-y-6">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-[#344053] text-sm font-medium font-['Inter'] leading-tight"
            >
              Name or Trade Name*
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 bg-white border border-[#cfd4dc] rounded-lg text-[#667084] text-base font-normal font-['Inter'] leading-normal shadow-sm"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-[#344053] text-sm font-medium font-['Inter'] leading-tight"
            >
              Phone*
            </label>
            <input
              id="phone"
              type="text"
              placeholder="Enter your phone"
              className="w-full px-4 py-2 bg-white border border-[#cfd4dc] rounded-lg text-[#667084] text-base font-normal font-['Inter'] leading-normal shadow-sm"
            />
          </div>

          {/* Section */}
          <div>
            <label
              htmlFor="section"
              className="block text-[#344053] text-sm font-medium font-['Inter'] leading-tight"
            >
              Choose the section*
            </label>
            <select
              id="section"
              className="w-full px-4 py-2 bg-white border border-[#cfd4dc] rounded-lg text-[#667084] text-base font-normal font-['Inter'] leading-normal shadow-sm"
            >
              <option value="">Choose</option>
            </select>
          </div>

          {/* Categories */}
          <div>
            <label
              htmlFor="categories"
              className="block text-[#344053] text-sm font-medium font-['Inter'] leading-tight"
            >
              Categories*
            </label>
            <select
              id="categories"
              className="w-full px-4 py-2 bg-white border border-[#cfd4dc] rounded-lg text-[#667084] text-base font-normal font-['Inter'] leading-normal shadow-sm"
            >
              <option value="">Select category</option>
            </select>
          </div>

          {/* Provinces */}
          <div>
            <label
              htmlFor="provinces"
              className="block text-[#344053] text-sm font-medium font-['Inter'] leading-tight"
            >
              Provinces*
            </label>
            <select
              id="provinces"
              className="w-full px-4 py-2 bg-white border border-[#cfd4dc] rounded-lg text-[#667084] text-base font-normal font-['Inter'] leading-normal shadow-sm"
            >
              <option value="">Select Provinces</option>
            </select>
          </div>

          {/* Agreement */}
          <div className="flex items-center space-x-2">
            <div
              className={`w-5 h-5 flex items-center justify-center rounded-full border-2 cursor-pointer ${
                isChecked.governorate
                  ? "border-green-500 bg-green-500"
                  : "border-gray-400 bg-gray-200"
              }`}
              onClick={() => toggleCheckbox("governorate")}
            >
              <svg
                className={`w-3 h-3 ${
                  isChecked.governorate ? "text-white" : "text-gray-500"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <label className="text-[#475466] text-sm font-medium font-['Inter'] leading-tight">
              Governorate
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <div
              className={`w-5 h-5 flex items-center justify-center rounded-full border-2 cursor-pointer ${
                isChecked.terms
                  ? "border-green-500 bg-green-500"
                  : "border-gray-400 bg-gray-200"
              }`}
              onClick={() => toggleCheckbox("terms")}
            >
              <svg
                className={`w-3 h-3 ${
                  isChecked.terms ? "text-white" : "text-gray-500"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <label className="text-[#475466] text-sm font-medium font-['Inter'] leading-tight">
              Agree to{" "}
              <a
                href="#"
                className="underline text-[#475466] font-medium font-['Inter']"
              >
                terms & Conditions
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleRegistration}
            className="w-full px-4 py-2 bg-[#0083b3] text-white rounded-lg text-base font-semibold font-['Inter'] leading-normal"
          >
            Registration
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
