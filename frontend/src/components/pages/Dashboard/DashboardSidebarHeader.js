const DashboardSidebarHeader = () => {
  return (
    <div className="min-h-[80px] flex items-center px-5 border-b border-zinc-150 w-full">
      <span className="w-10 h-10 rounded-full bg-purple-950 text-white flex items-center justify-center text-center">
        BN
      </span>

      <div className="ml-4">
        <h1 className="text-purple-960 text-base">Clayvant Inc</h1>
        <h2 className="text-gray-350 text-xs ">Manage Account</h2>
      </div>

      <span className="w-10 h-10 rounded-md bg-zinc-100 text-gray-350 flex items-center justify-center text-center ml-auto">
        <i className="bi bi-chevron-down"></i>
      </span>
    </div>
  );
};

export default DashboardSidebarHeader;
