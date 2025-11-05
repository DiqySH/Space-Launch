import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import { createBrowserRouter } from "react-router";
import ClientProvider from "@/modules/react-query/provider";

const router = createBrowserRouter([
  {
    element: <ClientProvider />,
    children: [
      {
        path: "/*",
        element: <NotFound />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
