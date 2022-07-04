import DashboardContentAreaBody from "./DashboardContentAreaBody";
import DashboardContentAreaHeader from "./DashboardContentAreaHeader";

const DashboardContentArea = () => {
  return (
    <main className="flex-1 bg-zinc-100  min-h-screen dashboard-content-area transition duration-150 ease-out xl:!translate-x-0">
      <DashboardContentAreaHeader />
      <DashboardContentAreaBody />
    </main>
  );
};

export default DashboardContentArea;
