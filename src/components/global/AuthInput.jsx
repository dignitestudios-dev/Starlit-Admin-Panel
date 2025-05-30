/* eslint-disable react/prop-types */
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const AuthInput = ({
  text,
  placeholder,
  type,
  value,
  name,
  maxLength,
  onChange,
  onBlur,
  error,
  touched,
}) => {
  const [isPassVisible, setIsPassVisible] = useState(false);

  return (
    <div className="flex flex-col gap-1 justify-start items-start space-y-2">
      <label className="text-[12px] font-bold">{text}</label>
      <div
        className="relative w-full h-[48px] border-[1px] border-[#D1D1D1] focus-within:border-[1px] 
        focus-within:border-[#55C9FA] flex justify-between items-center rounded-[8px] md:pl-3 pl-1.5"
      >
        <div className="w-full ">
          <input
            placeholder={placeholder}
            type={isPassVisible ? "text" : type}
            value={value}
            name={name}
            maxLength={maxLength}
            onChange={onChange}
            onBlur={onBlur}
            className=" h-8 w-[85%] outline-none text-sm bg-transparent text-white/50 pl-2 caret-customGrey"
          />
        </div>
        <span
          type="button"
          onClick={() => setIsPassVisible((prev) => !prev)}
          className="absolute text-lg right-2 cursor-pointer"
        >
          {type == "password" && (!isPassVisible ? <BsEyeSlash /> : <BsEye />)}
        </span>
      </div>
      {error && touched && <p className="text-error text-[12px]">{error}</p>}
    </div>
  );
};

export default AuthInput;
