import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
export default function App() {
  return (
    <div className=" h-screen  flex  font-body ">
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]  h-full bg-WD_E&C-Night-Shade  rounded-  shadow-2xl px-3">
        <Sidebar />
      </div>
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%]  h-full  flex flex-col p-3 bg-WD_E&C-Off-White  overflow-y-scroll no-scrollbar">
        <Outlet/>
      </div>
    </div>
  );
}
