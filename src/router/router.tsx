import { createBrowserRouter } from "react-router-dom";
import { ProtectedRouter } from "./protectedRouter";
import { Board, Calendar, Dashboard, Login, Users } from "../pages";
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
      {
        path: "/calendar",
        element: <Calendar />,
      },
      {
        path: "/board",
        element: <Board />,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
