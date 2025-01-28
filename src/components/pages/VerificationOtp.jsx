
import { useNavigate } from "react-router-dom";
import icon from '../../assets/Electricity, Air conditioning and Elevators/back arrow.svg'

const VerificationOTP = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-[90vh] bg-white">
      <div className="w-[428px] bg-white flex flex-col items-start px-8 py-6 space-y-6 ">
        {/* Header Section */}
        <div className="flex items-center space-x-4">
          {/* Back Arrow */}
          <div className="w-[37px] h-[37px] bg-[#0083b3] rounded-full flex justify-center items-center">
            <img
              src={icon}
              alt="Back Arrow"
            />
          </div>

          {/* Verification Text */}
          <h1 className="text-[#161616] text-xl font-bold font-['Poppins']">
            Verification
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-neutral-500 text-sm font-normal font-['Poppins'] leading-snug">
          We send you a code to verify your <br />
          mobile number.
        </p>

        {/* Enter OTP Text */}
        <h2 className="text-[#161616] text-lg font-bold font-['Poppins']">
          Enter your OTP code here
        </h2>

        {/* OTP Input */}
        <div className="flex space-x-4">
          <div className="w-[60px] h-[60px] bg-[#f3f3f3]/50 rounded-[10px] border border-[#0083b3]"></div>
          <div className="w-[60px] h-[60px] rounded-[10px] border border-neutral-500"></div>
          <div className="w-[60px] h-[60px] bg-[#f3f3f3]/50 rounded-[10px] border border-[#0083b3]"></div>
          <div className="w-[60px] h-[60px] bg-[#f3f3f3]/50 rounded-[10px] border border-[#0083b3]"></div>
        </div>

        {/* Continue Button */}
        <div style={{ marginLeft: "-25px" }} className="w-full flex flex-col items-center">
          <button
            className="w-[335px] h-14 bg-[#0083b3] rounded-[30px] text-white text-xl font-medium font-['Poppins']"
            onClick={() => navigate("/verifying")} // Navigate to /verifying
          >
            Continue
          </button>

          {/* Resend Section */}
          <div className="mt-4 text-center">
            <p className="text-neutral-500 text-sm font-normal font-['Poppins'] leading-snug">
              I don’t receive a code
            </p>
            <button className="text-[#0083b3] text-base font-semibold font-['Poppins'] leading-snug">
              RESEND
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationOTP;
