// eslint-disable-next-line react/prop-types
const StatsCard = ({ cardImage, count, text }) => {
  return (
    <div className="bg-[#FFFFFF] rounded-large w-[210px]  h-[88px] flex items-center  ">
      <div className="flex items-center gap-2 px-4 py-4  ">
        <div className="bg-[#E9FAFF] h-[44px] w-[44px] rounded-[12px] flex items-center justify-center ">
          <img
            src={cardImage}
            className="w-[22px] h-[22px] object-contain "
            alt=""
          />
        </div>
        <div>
          <h1 className="text-base font-[600] capitalize  text-[16px]">
            {count}
          </h1>
          <p className="text-customGrey capitalize text-[12px] tracking-[0.4px] font-[400]">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
