import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Index from "./Index";
import Denied from "./Pages/Denied";

const routes = [
  {
    index: true,
    element: <Login />,
  },
  {
    path: "home",
    element: (
      <AuthGuard roles={["CUSTOMER", "ADMIN"]}>
        <Home />
      </AuthGuard>
    ),
    children: [],
  },
  {
    path: "admin",
    element: (
      <AuthGuard roles={["ADMIN"]}>
        <Dashboard />
      </AuthGuard>
    ),
    children: [],
  },
  {
    path: "denied",
    element: <Denied />,
    children: [],
    errorElement: <h1>Something bad happend...</h1>,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: routes,
    errorElement: "",
  },
]);

function AuthGuard({ children, roles }) {
  const currentUser = JSON.parse(localStorage.getItem("credentials"));
  if (!currentUser) {
    return <Navigate to={"/"} />;
  } else if (!roles.includes(currentUser?.role)) {
    return <Navigate to={"/denied"} />;
  }

  return children;
}
