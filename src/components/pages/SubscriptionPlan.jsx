import React from "react";
import { useNavigate } from "react-router-dom";

const SubscriptionPlan = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[428px] p-6">
        {/* Header */}
        <div className="mb-8"></div>

        {/* Subscription Plans Section */}
        <div className="mb-12">
          <h1 className="text-black text-lg font-medium ">
            Subscription plans
          </h1>
          <p className="text-black text-sm font-normal  mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            amet, consectetur.
          </p>
        </div>

        {/* Plans */}
        <div className="space-y-6">
          {/* Plan 1 */}
          <div className="relative border border-[#0083b3] rounded-lg overflow-hidden">
            <div className="bg-[#0083b3] text-white p-4 text-base font-medium ">
              Choose Your Plan
            </div>
            <div className="p-4">
              <div className="text-black text-lg font-semibold ">
                KD 10.00
              </div>
              <p className="text-black text-[10px] font-normal ">
                1 year. Billed yearly
              </p>
              <div className="absolute right-4 top-4 bg-[#ffb700] text-white px-2 py-1 rounded-full text-[10px] font-semibold ">
                Save 75%
              </div>
            </div>
          </div>

          {/* Plan 2 */}
          <div className="relative border border-[#0083b3] rounded-lg overflow-hidden">
            <div className="p-4">
              <div className="text-black text-lg font-semibold ">
                KD 6.00
              </div>
              <p className="text-black text-[10px] font-normal ">
                6 month. Billed yearly
              </p>
            </div>
          </div>
        </div>

        {/* Checkout Button */}
        <div className="mt-12">
          <button
            onClick={() => navigate("/paymentMethod")}
            className="w-full h-14 bg-[#0083b3] text-white text-base font-semibold rounded-[40px] tracking-wider"
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
