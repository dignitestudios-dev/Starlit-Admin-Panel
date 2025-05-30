import { CiSearch } from "react-icons/ci";

const SearchField = () => {
  return (
    <div className="flex justify-end items-center">
      <div className="md:w-[500px] w-[300px] bg-[#ffffff] flex justify-between items-center rounded-small md:pl-3 pl-1.5">
        <div className="py-2 md:w-[30px] w-[20px] ">
          <CiSearch className="text-customGrey text-[20px]" />
        </div>
        <div className=" md:w-[350px] w-[200px]">
          <input
            placeholder="Search"
            className="md:w-[380px] w-[210px] outline-none text-sm bg-transparent h-4 text-white/50 pl-2 caret-customGrey "
          />
        </div>
        <div className="md:w-[100px] w-[60px] bg-primary text-[#ffffff] py-2 rounded-small flex justify-center">
          <button className="text-center font-light">Search</button>
        </div>
      </div>
    </div>
  );
};

export default SearchField;
