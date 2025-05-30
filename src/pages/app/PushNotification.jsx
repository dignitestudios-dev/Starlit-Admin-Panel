import { useNavigate } from "react-router";
import NotificationTable from "../../components/pushNotification/NotificationTable";
// import Filter from "../../../components/global/Filter";

const PushNotification = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-auto overflow-y-auto px-6 py-4 overflow-x-hidden">
      <div className="grid grid-cols-2 items-center justify-between pb-4">
        <div>
          <p className="text-heading text-base font-semibold">
            Push Notifications
          </p>
        </div>
        <div className="flex items-center justify-end w-full">
          <button
            type="button"
            className="h-[42px] w-[186px] bg-primary  rounded-[8px] text-[#ffffff] text-[14px]"
            onClick={() => navigate("/app/create-notification")}
          >
            {" "}
            + Create Notification
          </button>
        </div>
      </div>

      <NotificationTable />
    </div>
  );
};

export default PushNotification;
