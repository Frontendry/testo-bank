import "tw-elements";
import avatar from "../../../assets/images/smiling-black-woman.jpg";

import { useNavigate } from "react-router-dom";

const DashboardContentAreaHeader = () => {
  // Set Navigation
  const navigate = useNavigate();
  const toggleMenu = () => {
    document.body.classList.toggle("open-menu");
  };

  const logOut = () => {
    //remove token
    localStorage.removeItem("user");

    return navigate("/signin");
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

        <div className="dropdown">
          <button
            type="button"
            className="dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <figure className="ml-5">
              <img src={avatar} alt="BN" className="w-12 h-12 rounded-full" />
            </figure>
          </button>

          <ul
            className="
              dropdown-menu
              w-48
              absolute
              hidden
              bg-white
              text-base
              z-50
              float-left
              py-2
              list-none
              text-left
              rounded-lg
              shadow-xl
              mt-1
              m-0
              bg-clip-padding
              border-none
            "
            aria-labelledby="dropdownMenuButton2"
          >
            <li>
              <button
                type="button"
                onClick={logOut}
                className="dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-200"
              >
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default DashboardContentAreaHeader;
