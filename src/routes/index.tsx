import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import { createBrowserRouter } from "react-router";
import ClientProvider from "@/modules/react-query/provider";
import LaunchDetails from "@/pages/LaunchDetails";

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
      {
        path: "/launch/:id",
        loader: ({ params }) => params.id,
        element: <LaunchDetails />,
      },
    ],
  },
]);

export default router;
