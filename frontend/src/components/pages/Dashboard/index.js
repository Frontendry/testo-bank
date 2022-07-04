import DashboardContentArea from "./DashboardContentArea";
import DashboardSidebar from "./DashboardSidebar";

const Dashboard = () => {
  return (
    <section className="flex flex-1">
      <DashboardSidebar />
      <DashboardContentArea />
    </section>
  );
};

export default Dashboard;
