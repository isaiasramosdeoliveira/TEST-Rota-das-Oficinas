import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RomanNumbers from "../pages/RomanNumbers";
import GameOfLife from "../pages/GameOfLife";
import Restaurant from "../pages/Restaurant";
import Main from "../pages/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/numerosromanos",
        element: <RomanNumbers />,
      },
      {
        path: "/jogodavida",
        element: <GameOfLife />,
      },
      {
        path: "/contaderestaurante",
        element: <Restaurant />,
      },
    ],
  },
]);

export default router;
