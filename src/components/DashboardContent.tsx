"use client";

import { selectUserInfo } from "@/redux/features/userDetailsSlice";
import { useSelector } from "react-redux";
import UserProfile from "./shared/UserProfile";

const DashboardContent = () => {
  return <UserProfile />;
};

export default DashboardContent;
