import { person } from "../../assets/export";
import { formatDate } from "../../lib/helpers";

const tableData = [
  {
    name: "Ian Bell",
    email: "bell@gmail.com",
    reportedByEmail: "john123@gmail.com",
    reportedBy: "Mike Smith",
    reason: "this is reason",
    desc: "this is description",
    date: "2025-04-15",
    status: "Active",
  },
  {
    name: "Mathew Hen",
    email: "hen123@gmail.com",
    reportedByEmail: "john123@gmail.com",
    reportedBy: "Unmike Smith",
    reason: "this is the reason",
    desc: "this is the description",
    date: "2025-04-15",
    status: "Active",
  },
];

const ChatReportsTable = ({ data }) => {
  console.log(data, "data,");
  return (
    <div className="bg-[#fff] rounded-normal  mt-4 p-4">
      <div className="hidden md:grid grid-cols-12 gap-4 text-customGrey font-semibold text-[12px] border-b-[1px] border-b-[#f0f0f0]">
        <div className="col-span-2 py-3 text-left">Name</div>
        <div className="col-span-1 py-3 text-left">Status</div>
        <div className="col-span-2 py-3 text-left">Reported By</div>
        <div className="col-span-2 py-3 text-left">Reason</div>
        <div className="col-span-2 py-3 text-left">Date Reported</div>
        <div className="col-span-1 py-3 text-left">Action</div>
      </div>
      {data?.map((user, index) => {
        return (
          <div
            key={index}
            className="hidden md:grid grid-cols-12 gap-4 items-center border-b border-b-[#f0f0f0] py-2 mb-4 text-white text-[13px]"
          >
            <div className="col-span-2 flex items-center justify-start gap-3">
              <div className="flex items-center gap-2">
                <img
                  src={"https://starlit-bucket.s3.us-east-1.amazonaws.com/"+user?.user_profile_url}
                  alt={user?.name}
                  className="w-10 h-10 rounded-full object-cover bg-secondary"
                />
                <div className="flex flex-col">
                  <span className="font-medium">{user?.user_name}</span>
                  <span className="text-xs text-customGrey">
                    {user?.user_email}
                  </span>
                </div>
              </div>
            </div>
            <div
              className={`col-span-1 flex items-center justify-start gap-3 ${
                user.user_status === "Active" ? "text-active" : "text-inActive"
              } `}
            >
              {!user?.user_status ? "InActive" : "Active"}
            </div>
            <div className="col-span-2 flex items-center justify-start gap-3">
              <div className="flex items-center gap-2">
                <img
                  src={"https://starlit-bucket.s3.us-east-1.amazonaws.com/"+user?.target_user_profile_url}
                  alt={user?.target_user_name}
                  className="w-10 h-10 rounded-full object-cover bg-secondary"
                />
                <div className="flex flex-col">
                  <span className="font-medium">{user?.target_user_name}</span>
                  <span className="text-xs text-customGrey">
                    {user?.target_user_email}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-2 flex items-center justify-start gap-3">
              {user?.reason}
            </div>

            <div className="col-span-2 flex items-center justify-start gap-3">
              {formatDate(new Date(user?.createdAt))}
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

export default ChatReportsTable;
