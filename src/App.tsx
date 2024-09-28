import Sidebar from "./components/Sidebar";
import ProjectList from "./components/ProjectList";
export default function App() {
  return (
    <div className=" h-screen bg-gray-200 flex p-3 gap-x-3 ">
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]  h-full bg-white  rounded-lg  shadow-2xl p-3">
        <Sidebar />
      </div>
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%]  h-full rounded-lg flex flex-col p-3 bg-white  overflow-y-scroll no-scrollbar">
          <ProjectList />
      </div>
    </div>
  );
}
