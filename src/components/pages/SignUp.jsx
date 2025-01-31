import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload } from "lucide-react";
import avator from "../../assets/avator/unsplash_SE4Xc1WvIkU.png";

const Signup = () => {
  const [imageSrc, setImageSrc] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result); // Set the uploaded image URL
      };
      reader.readAsDataURL(file);
    }
  };
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
    navigate("/registration-success");
  };

  return (
    <div className="max-w-7xl lg:mx-auto md:mx-6 mx-4 py-16 ">
      <div className="md:mb-0 mb-24">
        <h2 className="text-[#0f1728] text-3xl text-center font-normal font-['Poppins'] leading-[38px] mb-6">
          Create an account
        </h2>
        <div className="max-w-md mx-auto space-y-6">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-[#344053] mb-1 text-sm font-medium font-['Poppins'] leading-tight"
            >
              Name or Trade Name*
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 bg-white border border-[#cfd4dc] rounded-lg text-[#667084] text-base font-normal font-['Poppins'] leading-normal shadow-sm"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-[#344053] mb-1 text-sm font-medium font-['Poppins'] leading-tight"
            >
              Phone*
            </label>
            <input
              id="phone"
              type="text"
              placeholder="Enter your phone"
              className="w-full px-4 py-2 border rounded-lg text-[#667084] text-base font-normal font-['Poppins'] leading-normal shadow-sm"
            />
          </div>

          <div className="flex items-center space-x-4">
            {/* Avatar or Uploaded Image */}
            <div>
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt="Uploaded"
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <img
                  src={avator} // Default avatar placeholder
                  alt="Avatar"
                  className="w-12 h-12 rounded-full"
                />
              )}
            </div>

            {/* File Input */}
            <label className="flex items-center space-x-2 cursor-pointer">
              <Upload className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-black">
                Upload Advertising image
              </span>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </label>
          </div>

          {/* Section */}
          <div>
            <label
              htmlFor="section"
              className="block text-[#344053] mb-1 text-sm font-medium font-['Poppins'] leading-tight"
            >
              Choose the section*
            </label>
            <select
              id="section"
              className="w-full px-4 py-2 bg-white border border-[#cfd4dc] rounded-lg text-[#667084] text-base font-normal font-['Poppins'] leading-normal shadow-sm"
            >
              <option value="">Choose</option>
            </select>
          </div>

          {/* Categories */}
          <div>
            <label
              htmlFor="categories"
              className="block text-[#344053] mb-1 text-sm font-medium font-['Poppins'] leading-tight"
            >
              Categories*
            </label>
            <select
              id="categories"
              className="w-full px-4 py-2 bg-white border border-[#cfd4dc] rounded-lg text-[#667084] text-base font-normal font-['Poppins'] leading-normal shadow-sm"
            >
              <option value="">Select category</option>
            </select>
          </div>

          {/* Provinces */}
          <div>
            <label
              htmlFor="provinces"
              className="block text-[#344053] mb-1 text-sm font-medium font-['Poppins'] leading-tight"
            >
              Provinces*
            </label>
            <select
              id="provinces"
              className="w-full px-4 py-2 bg-white border border-[#cfd4dc] rounded-lg text-[#667084] text-base font-normal font-['Poppins'] leading-normal shadow-sm"
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
            <label className="text-[#475466] text-sm font-medium font-['Poppins'] leading-tight">
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
            <label className="text-[#475466] text-sm font-medium font-['Poppins'] leading-tight">
              Agree to{" "}
              <a
                href="#"
                className="underline text-[#475466] font-medium font-['Poppins']"
              >
                terms & Conditions
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleRegistration}
            className="w-full px-4 py-2 bg-[#0083b3] text-white rounded-full text-base font-semibold font-['Poppins'] leading-normal"
          >
            Registration
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
