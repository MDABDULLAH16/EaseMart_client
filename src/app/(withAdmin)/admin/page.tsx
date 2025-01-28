import DashboardContent from "@/components/DashboardContent";

import { authOptions } from "@/utils/authOption";
import { getServerSession } from "next-auth";

const AdminDashboardPage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1>admin dashboard home page</h1>
      <DashboardContent session={session} />
    </div>
  );
};

export default AdminDashboardPage;
