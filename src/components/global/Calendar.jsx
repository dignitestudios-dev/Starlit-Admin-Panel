import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { calendar } from "../../assets/export";

// eslint-disable-next-line react/prop-types
const Calender = ({ startDate, setStartDate, position = "right-0", text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCalendar = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChange = (date) => {
    setStartDate(date);
    setIsOpen(false); // close after selecting
  };

  return (
    <div className="relative w-[200px]">
      <div
        onClick={toggleCalendar}
        className="relative w-full h-[40px] p-2 space-x-2 rounded-[12px] border border-[#D1D1D1] bg-white
         text-[11.63px] font-[500] text-[#212121] cursor-pointer flex items-center"
      >
        <div>
          <img
            src={calendar}
            className="text-[#012C57] h-[20px] w-[20px]"
            alt="calendar icon"
          />
        </div>
        <div>
          {startDate
            ? // eslint-disable-next-line react/prop-types
              startDate.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })
            : text}
        </div>
      </div>

      {isOpen && (
        <div className={`absolute z-50 mt-2 ${position}`}>
          <DatePicker
            selected={startDate}
            onChange={handleChange}
            inline
            minDate={new Date()}
            calendarClassName="shadow-lg border rounded-md"
            onClickOutside={() => setIsOpen(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Calender;
