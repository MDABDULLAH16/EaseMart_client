"use client";

import { selectUserInfo } from "@/redux/features/userDetailsSlice";
import { useSelector } from "react-redux";

const DashboardContent = () => {
  const user = useSelector(selectUserInfo);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">User Profile</h1>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
      <p>Role: {user?.role}</p>
      <p>Address: {user?.address}</p>
    </div>
  );
};

export default DashboardContent;
