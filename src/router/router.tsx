import { createBrowserRouter } from "react-router-dom";
import { ProtectedRouter } from "./protectedRouter";
import { Dashboard, Login } from "../pages";
import { Layout } from "../components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRouter>
        <Layout />
      </ProtectedRouter>
    ),
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
