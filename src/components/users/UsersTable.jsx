import { heart, person } from "../../assets/export";
import { useRevenue } from "../../hooks/api/Get";

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

// eslint-disable-next-line react/prop-types
const UsersTable = ({ isDesktop = false }) => {
  const { data, loading } = useRevenue("admin/users");
  console.log(data, "dataComes");
  return (
    <div className="bg-[#fff] rounded-normal  mt-4 p-4">
      <div className="hidden md:grid grid-cols-12 gap-4 text-customGrey font-semibold text-[12px] border-b-[1px] border-b-[#f0f0f0]">
        <div className="col-span-2 py-3 text-left">Name</div>
        <div className="col-span-1 py-3 text-left">Age</div>
        <div className="col-span-1 py-3 text-left">Gender</div>
        <div className="col-span-1 py-3 text-left">Date</div>
        <div className="col-span-2 py-3 text-left">State</div>
        <div className="col-span-2 py-3 text-left">City</div>
        <div className="col-span-1 py-3 text-left">Matches</div>
        <div className="col-span-1 py-3 text-left">Plan</div>
        <div className="col-span-1 py-3 text-left">Status</div>
      </div>
      {data?.map((user, index) => {
        return (
          <div
            key={index}
            className="hidden md:grid grid-cols-12 gap-4 items-center border-b border-b-[#f0f0f0] py-2 mb-4 text-white text-[13px]"
          >
            <div className="col-span-2 flex items-center justify-start gap-3">
              <div className="flex items-center gap-2">
                {user?.profile?.profile_url && (
                  <img
                    src={"https://starlit-bucket.s3.us-east-1.amazonaws.com/"+user?.profile?.profile_url}
                    alt={user?.profile?.name}
                    className="w-10 h-10 rounded-full object-cover bg-secondary"
                  />
                )}
                <div className="flex flex-col">
                  <span className="font-medium">{user?.profile?.name}</span>
                  <span className="text-xs text-customGrey">{user?.email}</span>
                </div>
              </div>
            </div>
            <div className="col-span-1 flex items-center justify-start gap-3">
              {user?.profile?.age}
            </div>
            <div className="col-span-1 flex items-center justify-start gap-3">
              {user?.profile?.gender}
            </div>
            <div className="col-span-1 flex items-center justify-start gap-3">
              {user?.profile?.date}
            </div>
            <div className="col-span-2 flex items-center justify-start gap-3">
              {user?.profile?.state}
            </div>
            <div className="col-span-2 flex items-center justify-start gap-3">
              {user?.profile?.city}
            </div>
            <div className="col-span-1 flex items-center justify-start gap-2">
              <img src={heart} alt="heart" className="pt-[2px]" />{" "}
              {user?.matchCount}
            </div>
            <div className="col-span-1 flex items-center justify-start gap-3 text-customGrey">
              {user?.subscriptionSku}
            </div>
            <div
              className={`col-span-1 flex items-center justify-start gap-3 ${
                user.status === "Active" ? "text-active" : "text-inActive"
              } `}
            >
              {user?.status}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UsersTable;
