import { RouterProvider } from "react-router-dom";

import { router } from "./router";

export const App: React.FC = () => {
  return (
    <div className="w-screen h-screen overflow-hidden bg-gray-900 text-gray-50">
      <RouterProvider router={router} />
    </div>
  );
};
