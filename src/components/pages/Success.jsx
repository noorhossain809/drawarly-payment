import React from "react";

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
    <div className="p-6 bg-white rounded-lg shadow-md md:mx-0 mx-6">
      <h1 className="text-3xl font-bold text-[#0083B3]">Success!</h1>
      <div className="my-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 text-[#0083B3] mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <p className="text-lg text-gray-700">
        Thank you for <br />
        Your diagnostics result will be delivered to you as soon as possible.
      </p>
    </div>
  </div>
  );
};

export default Success;
