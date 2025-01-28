
import { useNavigate } from "react-router-dom";

const Verification = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="flex flex-col justify-center items-start w-full max-w-md mx-auto min-h-[90vh] p-6 font-['Poppins'] ">
      {/* Back Button */}
      <div className="flex items-center gap-4 mb-6">
        <div
          className="w-10 h-10 bg-[#0083b3] rounded-full flex items-center justify-center cursor-pointer"
          onClick={() => navigate(-1)} // Navigate back to the previous page
        >
          <span className="text-white">&larr;</span>
        </div>
        <h1 className="text-xl  font-semibold text-[#2c2e33]">Verification</h1>
      </div>

      {/* Instructions */}
      <p className="text-sm text-[#8a8a8a] mb-8">
        Enter your mobile number to enable 2-step verification.
      </p>

      {/* Input Section */}
      <div className="flex flex-col w-full">
        <label className="block text-[#2c2e33] font-semibold text-base mb-4">
          Enter your mobile number
        </label>
        <div className="flex flex-col mb-8 w-full">
          <label className="text-sm text-[#2c2e33] mb-2">Mobile No</label>
          <input
            type="text"
            placeholder="Enter your mobile number"
            className="w-full h-[50px] px-4 rounded-[30px] border border-[#0083b3] text-sm text-[#2c2e33] focus:outline-none focus:ring focus:ring-[#0083b3]"
          />
        </div>
      </div>

      {/* Button */}
      <button
        onClick={() => navigate("/verificationOtp")} // Navigate to the Verification OTP page
        className="w-full h-[50px] bg-[#0083b3] text-white rounded-[30px] text-base font-medium uppercase"
      >
        Continue
      </button>
    </div>
  );
};

export default Verification;
