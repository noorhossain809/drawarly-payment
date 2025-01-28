
import mobileLogo from '../../assets/logo/mobile-logo.svg'

const Verifying = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[90vh] bg-[#f3f7fa]">
      {/* Logo Section */}
      <div className="flex flex-col items-center mb-6 lg:mb-10 -mt-6">
        <div className=" flex justify-center items-center overflow-hidden">
          <img
            src={mobileLogo}
            alt="Logo"
            className="object-contain  w-28 h-28"
          />
        </div>
      </div>

      {/* Progress Section */}
      <div className="flex flex-col items-center w-[90%] max-w-[400px]">
        {/* Progress Bar */}
        <div className="w-full bg-[#def1ff] rounded-full h-3 lg:h-[10px] relative mb-6 lg:mb-8">
          <div className="bg-[#3996d9] h-full rounded-full" style={{ width: "20%" }}></div>
        </div>
        {/* Text */}
        <h2 className="text-black text-lg lg:text-2xl font-medium leading-normal font-['Poppins'] text-center">
          Dawarly User Verifying
        </h2>
        <p className="text-black text-sm lg:text-base font-normal font-['Poppins'] text-center mt-2">
          Please wait while verifying your number
        </p>
      </div>
    </div>
  );
};

export default Verifying;
