import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Recruiting from "./pages/Recruiting";
import NotFound from "./pages/NotFound";
import routes from "./constants/routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: routes.recruiting,
        element: <Recruiting />,
      },

      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
