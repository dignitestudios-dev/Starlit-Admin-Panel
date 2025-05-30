import { RiLoader5Line } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
const AuthButton = ({ text, type, loading }) => {
  return (
    <button
      type={type}
      disabled={loading}
      className="bg-primary text-[#ffffff] h-[45px] w-full rounded-[9px]"
    >
      <div className="flex justify-center items-center">
        <span className="mr-1">{text}</span>
        <span>
          {loading && (
            <RiLoader5Line className="animate-spin text-xl mx-auto" />
          )}
        </span>
      </div>
    </button>
  );
};

export default AuthButton;
