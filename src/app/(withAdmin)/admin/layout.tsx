import AdminSidebar from "@/components/shared/AdminSidebar";
import UserSidebar from "@/components/shared/UserSidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EaseMart User Dashboard",
  description: "Manage apps here",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen my-2">
      <div className="flex justify-between">
        <div className="w-[20%]">
          <AdminSidebar />
        </div>
        <div className="w-[80%] bg-base-200 rounded-box ml-2">{children}</div>
      </div>
    </div>
  );
}
