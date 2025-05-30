import BlockedUsers from "../pages/app/BlockedUsers";
import CreateNotification from "../pages/app/CreateNotification";
import CreateVoucher from "../pages/app/CreateVoucher";
import Dashboard from "../pages/app/Dashboard";
import DeletedUsers from "../pages/app/DeletedUsers";
import PushNotification from "../pages/app/PushNotification";
import ReportedUsers from "../pages/app/ReportedUsers";
import UpdatePassword from "../pages/app/UpdatePassword";
import Users from "../pages/app/Users";
import Vouchers from "../pages/app/Vouchers";

export const privateRoutes = [
  {
    title: "Dashboard",
    url: "dashboard",
    page: <Dashboard />,
  },
  {
    title: "Users",
    url: "users",
    page: <Users />,
  },
  {
    title: "Reported Users",
    url: "reported-users",
    page: <ReportedUsers />,
  },
  {
    title: "Deleted Users",
    url: "deleted-users",
    page: <DeletedUsers />,
  },
  {
    title: "Blocked Users",
    url: "blocked-users",
    page: <BlockedUsers />,
  },
  {
    title: "Vouchers",
    url: "/app/vouchers",
    page: <Vouchers />,
  },
  {
    title: "Create Voucher",
    url: "create-voucher",
    page: <CreateVoucher />,
  },
  {
    title: "Push Notification",
    url: "notification",
    page: <PushNotification />,
  },
  {
    title: "Create Notification",
    url: "create-notification",
    page: <CreateNotification />,
  },
  {
    title: "Update Password",
    url: "update-password",
    page: <UpdatePassword />,
  },
];
