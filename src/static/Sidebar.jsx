import { BsExclamationSquare } from "react-icons/bs";
import { FiUserX } from "react-icons/fi";
import { IoDocumentTextOutline, IoWarningOutline } from "react-icons/io5";
import { LiaUserSlashSolid } from "react-icons/lia";
import { PiUsersThreeBold } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";
import { SlLock } from "react-icons/sl";

export const sidebarData = [
  {
    title: "Dashboard",
    link: "/app/dashboard",
    icon: <RxDashboard />,
  },
  {
    title: "Users",
    link: "/app/users",
    icon: <PiUsersThreeBold />,
  },
  {
    title: "Reported Users",
    link: "/app/reported-users",
    icon: <IoWarningOutline />,
  },
  {
    title: "Deleted/ Deactivated Users",
    link: "/app/deleted-users",
    icon: <LiaUserSlashSolid />,
  },
  {
    title: "Blocked Users",
    link: "/app/blocked-users",
    icon: <FiUserX />,
  },
  {
    title: "Vouchers",
    link: "/app/vouchers",
    icon: <IoDocumentTextOutline />,
  },
  {
    title: "Push Notifications",
    link: "/app/notification",
    icon: <BsExclamationSquare />,
  },
  {
    title: "Update Password",
    link: "/app/update-password",
    icon: <SlLock />,
  },
];
