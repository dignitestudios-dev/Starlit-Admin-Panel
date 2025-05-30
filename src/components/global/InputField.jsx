/* eslint-disable react/prop-types */

import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const InputField = ({ text, placeholder, type, value, name, maxLength }) => {
  const [isPassVisible, setIsPassVisible] = useState(false);

  return (
    <div className="flex flex-col  gap-1 justify-start items-start">
      <label>{text}</label>
      <div
        className="relative w-full h-10 border-[1px] border-[#D1D1D1] focus-within:border-[1px] 
      focus-within:border-[#55C9FA] flex justify-between items-center rounded-[12px] md:pl-3 pl-1.5"
      >
        <div className="w-full ">
          <input
            placeholder={placeholder}
            type={type}
            value={value}
            name={name}
            maxLength={maxLength}
            className=" h-8 w-[85%] outline-none text-sm bg-transparent text-white/50 pl-2 caret-customGrey "
          />
        </div>
        <span
          onClick={() => setIsPassVisible((prev) => !prev)}
          className="absolute text-lg right-2 cursor-pointer"
        >
          {type == "password" && (!isPassVisible ? <BsEyeSlash /> : <BsEye />)}
        </span>
      </div>
    </div>
  );
};

export default InputField;
