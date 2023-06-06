import ReactDOM from "react-dom/client";
import GlobalStyles from "./global/GlobalStyle.tsx";
import router from "./routes/router.tsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <GlobalStyles />
    <RouterProvider router={router} />
  </>
);
