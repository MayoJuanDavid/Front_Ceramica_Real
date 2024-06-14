import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard";
export const BrowserRouter = createBrowserRouter([
  {
    path: "/vajillas",
    element: <Dashboard />,
  },
]);
