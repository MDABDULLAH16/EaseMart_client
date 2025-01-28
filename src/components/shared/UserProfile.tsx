"use client";
import React from "react";
import { useSelector } from "react-redux";
import { selectUserInfo } from "@/redux/features/userDetailsSlice";

const UserProfile = () => {
  const userInfo = useSelector(selectUserInfo);

  if (!userInfo) {
    return <p>No user info available.</p>;
  }

  return (
    <div>
      <h1>Welcome, {userInfo.name}!</h1>
      <p>Email: {userInfo.email}</p>
      <p>Role: {userInfo.role}</p>
    </div>
  );
};

export default UserProfile;
