import "normalize.css";
import "./styles/global.scss"
import { RouterProvider } from "react-router";
import { router } from "./routers";

function App() {
  return <RouterProvider router={router} />
}

export default App;
