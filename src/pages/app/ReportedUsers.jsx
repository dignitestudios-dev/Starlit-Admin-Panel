import { useState } from "react";
import SearchField from "../../components/global/SearchField";
import ChatReportsTable from "../../components/reportedUsers/ChatReportsTable";
import ProfileReportsTable from "../../components/reportedUsers/ProfileReportsTable";
import { useReportedUsers } from "../../hooks/api/Get";

const ReportedUsers = () => {
  const tabs = ["chat", "profile"];
  const [activeTab, setActiveTab] = useState("chat");

  // const [reportedUsers, setReportedUsers] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const [update, setUpdate] = useState(false);

  const { data, loading } = useReportedUsers("admin/profiles/reported",activeTab);

  
  console.log("🚀 ~ MyData ~ loading ` data:", data, loading);

  return (
    <div className="w-full h-auto overflow-y-auto px-6 py-4 overflow-x-hidden">
      <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-between pb-4">
        <div>
          <p className="text-heading text-base font-semibold">Reported Users</p>
        </div>

        <SearchField />
      </div>
      <div className="flex items-center bg-[#ffffff] md:w-[410px] w-[280px] rounded-small font-light p-[4px] ">
        {tabs.map((item) => (
          <div
            key={item}
            onClick={() => setActiveTab(item)}
            className={` w-[206px] text-center h-[45px] justify-center cursor-pointer flex items-center ${
              activeTab === item
                ? "bg-primary rounded-[8px] text-[#ffffff] "
                : "bg-transparent text-[#202224]"
            }`}
          >
            <p className="text-[14px] font-[400] capitalize">{item} Report</p>
          </div>
        ))}
      </div>
      {activeTab === "chat" ? (
        <ChatReportsTable data={data} />
      ) : (
        <ProfileReportsTable data={data} />
      )}
    </div>
  );
};

export default ReportedUsers;
