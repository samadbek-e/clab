import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
      <RouterProvider router={router} /> /* "router" => root Router */
  );
}

export default App;
