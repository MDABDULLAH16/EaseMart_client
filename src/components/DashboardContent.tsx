"use client";

import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

type DashboardContentProps = {
  session: {
    user?: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  } | null;
};

const DashboardContent = ({ session }: DashboardContentProps) => {
  const EmailUser = useAppSelector(
    (state: RootState) => state?.userDetails?.userDetails
  );

  // Determine logged-in user
  const loggedInUser = session?.user || EmailUser;
  console.log("old data", loggedInUser);

  // Access user details from Redux state
  const user = useSelector((state: RootState) => state.auth.user);
  console.log("lucy user", user);

  // if (!userDetails) {
  //   return <div>Loading...</div>;
  // }

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
