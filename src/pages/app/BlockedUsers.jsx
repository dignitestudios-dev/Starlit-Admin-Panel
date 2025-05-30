import { useState } from "react";
import SearchField from "../../components/global/SearchField";
import ChatBlockedTable from "../../components/blockedUsers/ChatBlockedTable";
import ChatReportsTable from "../../components/reportedUsers/ChatReportsTable";
import { useRevenue } from "../../hooks/api/Get";

const BlockedUsers = () => {
  const tabs = ["chat", "profile"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const { data, loading } = useRevenue("admin/blocked-users");
  console.log(data,"data")
  return (
    <div className="w-full h-auto overflow-y-auto px-6 py-4 overflow-x-hidden">
      <div className="grid grid-cols-2 items-center justify-between pb-4">
        <div>
          <p className="text-heading text-base font-semibold">Blocked Users</p>
        </div>
        <SearchField />
      </div>
      <div className="flex items-center bg-[#ffffff] w-[410px] rounded-small font-light px-1">
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
        <ChatBlockedTable data={data} />
      ) : (
        <ChatReportsTable data={data} />
      )}
    </div>
  );
};

export default BlockedUsers;
