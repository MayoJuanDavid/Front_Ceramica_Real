import { RouterProvider } from "react-router-dom";
import { BrowserRouter } from "./routes";

export default function Home() {
  return (
    <RouterProvider router={BrowserRouter}/>
  );
}
