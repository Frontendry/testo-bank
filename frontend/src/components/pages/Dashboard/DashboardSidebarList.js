const DashboardSidebarList = () => {
  return (
    <ul className="font-semibold px-5 mt-10 w-full">
      <li className="mb-5">
        <a href="#!" className="text-red-350">
          <span className="flex">
            <span className="w-8 text-lg">
              <i className="bi bi-credit-card"></i>
            </span>
            Accounts
          </span>
        </a>
      </li>

      <li className="mb-5">
        <a href="#!" className="text-gray-350 hover:text-red-350">
          <span className="flex">
            <span className="w-8 text-lg">
              <i className="bi bi-wallet2"></i>
            </span>
            Transfer
          </span>
        </a>
      </li>

      <li className="mb-5">
        <a href="#!" className="text-gray-350 hover:text-red-350">
          <span className="flex">
            <span className="w-8 text-lg">
              <i className="bi bi-receipt-cutoff"></i>
            </span>
            Invoice
          </span>
        </a>
      </li>

      <li className="mb-5">
        <a href="#!" className="text-gray-350 hover:text-red-350">
          <span className="flex">
            <span className="w-8 text-lg">
              <i className="bi bi-magic"></i>
            </span>
            Management
          </span>
        </a>
      </li>

      <li className="mb-5">
        <a href="#!" className="text-gray-350 hover:text-red-350">
          <span className="flex">
            <span className="w-8 text-lg">
              <i className="bi bi-lock"></i>
            </span>
            Security
          </span>
        </a>
      </li>

      <li>
        <a href="#!" className="text-gray-350 hover:text-red-350">
          <span className="flex">
            <span className="w-8 text-lg">
              <i className="bi bi-bag-heart"></i>
            </span>
            Support
          </span>
        </a>
      </li>
    </ul>
  );
};

export default DashboardSidebarList;
