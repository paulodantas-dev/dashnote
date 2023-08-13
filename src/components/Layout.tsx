import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <div>Layout</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
