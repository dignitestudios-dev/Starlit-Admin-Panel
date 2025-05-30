import { useNavigate } from "react-router";
import { activeUser, deleteUser, totalUser } from "../../assets/export";
import DashboardSearch from "../../components/dashboard/DashboardSearch";
import GraphCard from "../../components/dashboard/GraphCard";
import StatsCard from "../../components/dashboard/StatsCard";
import UsersTable from "../../components/users/UsersTable";
import { useRevenue} from "../../hooks/api/Get";

const Dashboard = () => {
  const navigate = useNavigate();
  const {data,loading}=useRevenue("admin/revenue",);
  console.log(data,"data");
  
  return (
    <div className="p-6 w-full h-auto overflow-y-auto">
      <p className="text-heading text-base font-semibold">Dashboard</p>

      <div className="grid grid-cols-3 gap-4 pt-4 w-[55%]">
        <StatsCard cardImage={totalUser} count="1500+" text="Total Users" />
        <StatsCard cardImage={activeUser} count="500+" text="Active Users" />

        <StatsCard
          cardImage={deleteUser}
          count="700+"
          text="Deleted & Deactivated"
        />
      </div>
      <GraphCard />

      <div className="bg-[#fff] rounded-normal h-[500px] mt-4">
        <div className="grid grid-cols-2 items-center justify-between pt-6 px-4">
          <div>
            <p className="text-[18px] text-base font-bold">Users</p>
          </div>
          <div className="flex justify-end items-center">
            <p
              onClick={() => navigate("/app/users")}
              className="text-primary decoration-primary underline cursor-pointer"
            >
              View All
            </p>
          </div>
        </div>
        <div className="mt-2 w-[520px] pl-4">
          <DashboardSearch />
        </div>
        <UsersTable isDesktop={true} />
      </div>
    </div>
  );
};

export default Dashboard;
