import { useNavigate } from "react-router";
import { loginBackground, loginLogo } from "../../assets/export";
import AuthButton from "./../../components/global/AuthButton";
import { useRef, useState } from "react";
import { useLogin } from "../../hooks/api/Post";
import { processResend, processVerifyOtp } from "../../lib/utils";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const inputs = useRef([]);

  const { loading, postData } = useLogin();
  console.log("🚀 ~ VerifyOtp ~ loading:", loading);

  const [otp, setOtp] = useState(Array(4).fill(""));
  const otpEmail = sessionStorage.getItem("email");

  const handleChange = (e, index) => {
    const { value } = e.target;

    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < otp.length - 1) {
        inputs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      if (index > 0) {
        inputs.current[index - 1].focus();
      }
    }
  };

  const getOtpValue = () => {
    return otp.join("");
  };

  const handleOtp = async () => {
    let values = { email: otpEmail, OTP: getOtpValue() };
    postData("/admin/verifyotp", false, null, values, processVerifyOtp);   
  };

  const handleResendOtp = async () => {
    let values = { email: otpEmail };
    postData("/admin/forgotpassword", false, null, values, processResend);
  };

  return (
    <div className="h-screen w-full flex justify-between items-center pt-14 pl-4 mb-10 ">
      <div
        className="w-full h-screen p-8 rounded-b-normal"
        style={{
          backgroundImage: `url(${loginBackground})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="w-full h-screen ">
        <div>
          <img src={loginLogo} alt="logo" className="h-[162] w-[258px]" />
        </div>
        <div className="p-10 mt-12">
          <div className="space-y-4">
            <p className="text-[36px] font-bold">Verification</p>
            <p className="text-[16px] text-light">
              Enter verification code sent to your email
            </p>
          </div>
          <div className="pt-8 w-[448px]">
            <div className="w-full h-auto grid grid-cols-6 justify-center items-center gap-4 mb-6 ">
              {otp.map((digit, index) => (
                <input
                  inputMode="numeric"
                  key={index}
                  type="password"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (inputs.current[index] = el)}
                  className="h-[62px] w-[62] rounded-[12px] outline-none text-center border-[1px] border-[#8A8A8A] 
                  md:text-2xl text-xl font-bold focus-within:border-[#8A8A8A] flex items-center justify-center"
                />
              ))}
            </div>
            <div className="flex">
              <p className=" text-light text-[14px] font-[400] ">
                Didn’t received code?
                <span
                  onClick={handleResendOtp}
                  className="text-primary font-bold pl-1 cursor-pointer"
                >
                  Resend now
                </span>
              </p>
            </div>
            <div className="pt-8" onClick={handleOtp}>
              <AuthButton text="Verify" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
