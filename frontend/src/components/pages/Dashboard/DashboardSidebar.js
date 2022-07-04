import DashboardSidebarHeader from "./DashboardSidebarHeader";
import DashboardSidebarList from "./DashboardSidebarList";
import grayLogo from "../../../assets/images/testo-logo-gray.png";

const DashboardSidebar = () => {
  return (
    <aside className="w-72 h-full xl:h-auto flex flex-col items-start shadow-xl fixed left-0 top-0 xl:relative xl:left-auto xl:top-auto z-10 bg-white translate-x-[-110%] xl:!translate-x-0 transition duration-150 ease-out dashboard-menu">
      <DashboardSidebarHeader />
      <DashboardSidebarList />
      <figure className="mt-auto px-5 pb-5">
        <a href="#!">
          <img src={grayLogo} alt="Testo" />
        </a>
      </figure>
    </aside>
  );
};

export default DashboardSidebar;
