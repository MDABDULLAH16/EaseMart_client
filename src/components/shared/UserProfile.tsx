"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUserInfo } from "@/redux/features/userDetailsSlice";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBriefcase,
  FaMapMarkerAlt,
  FaEdit,
  FaCopy,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { toast } from "react-toastify";
import Image from "next/image";

// Define types for user data and InfoCard props
interface UserInfo {
  name: string;
  email: string;
  phone: string;
  role: string;
  address: string;
  avatar?: string;
}

interface InfoCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
}

const UserProfile = () => {
  const userInfo = useSelector(selectUserInfo);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  if (!userInfo) {
    return <p>No user info available.</p>;
  }

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${field} copied to clipboard!`);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const InfoCard: React.FC<InfoCardProps> = ({ icon: Icon, label, value }) => (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full">
            <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
            <p className="text-base font-medium text-gray-900 dark:text-white">
              {value || "Not provided"}
            </p>
          </div>
        </div>
        <button
          onClick={() => copyToClipboard(value, label)}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          title="Copy to clipboard"
        >
          <FaCopy className="w-4 h-4 text-gray-400 hover:text-blue-600 dark:text-gray-500 dark:hover:text-blue-400" />
        </button>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="max-w-3xl mx-auto">
          {/* Dark Mode Toggle */}
          <div className="flex justify-end mb-6">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              {darkMode ? (
                <FaSun className="w-5 h-5 text-yellow-500" />
              ) : (
                <FaMoon className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>

          {/* Profile Header */}
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <Image
                src={
                  userInfo.avatar ||
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                }
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
                width={128}
                height={128}
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
                }}
              />
              <button
                className="absolute bottom-0 right-0 p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors duration-200"
                title="Edit profile picture"
              >
                <FaEdit className="w-4 h-4" />
              </button>
            </div>
            <h1 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
              {userInfo.name}
            </h1>
          </div>

          {/* Profile Information */}
          <div className="space-y-4">
            <InfoCard icon={FaUser} label="Full Name" value={userInfo.name} />
            <InfoCard icon={FaEnvelope} label="Email" value={userInfo.email} />
            <InfoCard icon={FaPhone} label="Phone" value={userInfo.phone} />
            <InfoCard icon={FaBriefcase} label="Role" value={userInfo.role} />
            <InfoCard
              icon={FaMapMarkerAlt}
              label="Address"
              value={userInfo.address}
            />
          </div>

          {/* Edit Profile Button */}
          <div className="mt-8 text-center">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
