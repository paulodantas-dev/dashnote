import { Outlet } from "react-router-dom";
import { Avatar, BgGradient, Sidebar } from ".";
import { format } from "date-fns";
import { MagnifyingGlass } from "@phosphor-icons/react";

export const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="w-full relative z-0 flex flex-col">
        <BgGradient />

        <div className="flex items-center justify-between py-8 px-16">
          <span className="font-light text-base">
            {format(new Date(), "MM/dd/yyyy")}
          </span>

          <div className="bg-gray-50/80 p-1 rounded-lg flex items-center justify-center gap-2 border-2 border-gray-300 max-w-xs w-full">
            <MagnifyingGlass
              className="text-gray-600"
              size={20}
              weight="light"
            />

            <input
              className="bg-transparent border-none text-gray-600 placeholder:text-gray-400 outline-none p-0 w-full"
              type="text"
              placeholder="Search"
            />
          </div>

          <Avatar />
        </div>

        <div className="flex-grow py-8 px-16">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
