import { paths } from "./constants/routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <main className="flex justify-center w-screen h-screen bg-slate-800 pt-28">
      <RouterProvider router={paths} />
    </main>
  );
}

export default App;
