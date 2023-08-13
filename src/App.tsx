import { RouterProvider } from "react-router-dom";

import { router } from "./router";

export const App: React.FC = () => {
  return (
    <div className="w-screen h-screen">
      <RouterProvider router={router} />
    </div>
  );
};
