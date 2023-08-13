import { NavLink, useLocation } from "react-router-dom";
import {
  ChartBar,
  CalendarBlank,
  ListChecks,
  Table,
} from "@phosphor-icons/react";

export const Sidebar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path
      ? "text-indigo-500"
      : "text-gray-200 hover:text-indigo-500";
  };

  return (
    <div className="h-screen max-w-[5rem] bg-slate-950 z-10 w-full flex flex-col items-center py-8 gap-16">
      <img src="./dash.svg" alt="logo" className="w-3/4 " />

      <nav className="flex flex-col gap-20 w-full">
        <NavLink
          className={`${isActive(
            "/"
          )} flex justify-center w-full transition-colors`}
          to="/"
          title="Dashboard"
        >
          <ChartBar size={28} weight="bold" />
        </NavLink>

        <NavLink
          className={`${isActive(
            "/calendar"
          )} flex justify-center w-full transition-colors`}
          to="calendar"
          title="Calendar"
        >
          <CalendarBlank size={28} weight="bold" />
        </NavLink>

        <NavLink
          className={`${isActive(
            "/board"
          )} flex justify-center w-full transition-colors`}
          to="board"
          title="Board"
        >
          <ListChecks size={28} weight="bold" />
        </NavLink>

        <NavLink
          className={`${isActive(
            "/users"
          )} flex justify-center w-full transition-colors`}
          to="users"
          title="Users"
        >
          <Table size={28} weight="bold" />
        </NavLink>
      </nav>
    </div>
  );
};
