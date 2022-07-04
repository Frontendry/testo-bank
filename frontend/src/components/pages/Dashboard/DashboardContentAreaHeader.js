import avatar from "../../../assets/images/smiling-black-woman.jpg";

const DashboardContentAreaHeader = () => {
  const toggleMenu = () => {
    document.body.classList.toggle("open-menu");
  };

  return (
    <header className="min-h-[80px] flex items-center px-4 xl:px-20 bg-white">
      <button type="button" className="mr-5 xl:hidden" onClick={toggleMenu}>
        <span className="menu-trigger cursor-pointer w-7 h-4 flex flex-col justify-between">
          <span className="menu-trigger-line w-full h-0.5 bg-red-350"></span>
          <span className="menu-trigger-line w-full h-0.5 bg-red-350"></span>
          <span className="menu-trigger-line w-full h-0.5 bg-red-350"></span>
        </span>
      </button>

      <h3 className="text-gray-350 font-semibold text-lg sm:text-2xl">
        Dashboard
      </h3>

      <div className="ml-auto flex items-center">
        <span className="w-10 h-10 rounded-md border border-gray-200  text-gray-350 flex items-center justify-center text-center ml-auto">
          <i className="bi bi-bell-fill"></i>
        </span>

        <figure className="ml-5">
          <img src={avatar} alt="BN" className="w-12 h-12 rounded-full" />
        </figure>
      </div>
    </header>
  );
};

export default DashboardContentAreaHeader;
