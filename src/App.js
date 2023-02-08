import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import StickyMsgBtn from "./components/SitckyMsgBtn/StickyMsgBtn";
import { router } from "./Routes/Routes/Routes";

function App() {
  return (
    <section className="max-w-[1400px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <StickyMsgBtn></StickyMsgBtn>
      <Toaster />
    </section>
  );
}

export default App;
