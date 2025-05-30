import { activeUser } from "../../assets/export";
import { getColSpanClass } from "../../lib/helpers";

const tableHeadings = [
  { text: "Name", colSpan: 2 },
  { text: "Age", colSpan: 1 },
  { text: "Gender", colSpan: 1 },
  { text: "Date", colSpan: 1 },
  { text: "State", colSpan: 2 },
  { text: "City", colSpan: 2 },
  { text: "Matches", colSpan: 1 },
  { text: "Plan", colSpan: 1 },
  { text: "Status", colSpan: 1 },
];

const tableData = [
  {
    name: "John Doe",
    email: "john@gmail.com",
    age: 28,
    gender: "Male",
    date: "2025-04-15",
    state: "California",
    city: "Los Angeles",
    matches: 5,
    plan: "Premium",
    status: "Active",
  },
  {
    name: "Jane Smith",
    email: "john123@gmail.com",
    age: 32,
    gender: "Female",
    date: "2025-04-12",
    state: "Texas",
    city: "Austin",
    matches: 3,
    plan: "Standard",
    status: "Inactive",
  },
];

const CommonTable = () => {
  return (
    <div className="bg-[#fff] rounded-normal  mt-4 p-4">
      <div className="hidden md:grid grid-cols-12 gap-4 text-white font-semibold text-[12px]  border-b-[1px] border-b-[#f0f0f0]">
        {tableHeadings.map((heading, index) => (
          <span
            key={index}
            className={`${getColSpanClass(
              heading.colSpan
            )} py-2 px-2 text-left capitalize text-customGrey`}
          >
            {heading.text}
          </span>
        ))}
      </div>

      {tableData.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 rounded-lg items-center text-[13px] text-white border-b-[1px] border-b-[#f0f0f0]"
        >
          {tableHeadings.map((heading, colIndex) => {
            const key = heading.text.toLowerCase().replace(/\s/g, "");

            return (
              <div
                key={colIndex}
                className={`${getColSpanClass(
                  heading.colSpan
                )} flex md:block text-left`}
              >
                {/* Label for mobile */}
                <span className="font-semibold md:hidden text-customGrey w-24 shrink-0">
                  {heading.text}:
                </span>

                {key === "name" ? (
                  <div className="flex items-center gap-2">
                    <img
                      src={activeUser}
                      alt={row.name}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <span className="font-medium">{row.name}</span>
                      <span className="text-xs text-customGrey">
                        {row.email}
                      </span>
                    </div>
                  </div>
                ) : (
                  <span>{row[key] ?? "-"}</span>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default CommonTable;
