import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "./pages/_layouts/app";
import { NotFound } from "./pages/404";
import { Carnes } from "./pages/app/carnes";
import { Combo } from "./pages/app/combo";
import { Home } from "./pages/app/home";
import { Massas } from "./pages/app/massas";
import { Veganos } from "./pages/app/veganos";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/massas", element: <Massas /> },
      { path: "/carnes", element: <Carnes /> },
      { path: "/combos", element: <Combo /> },
      { path: "/veganos", element: <Veganos /> },
    ],
  },
]);
