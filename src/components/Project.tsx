import { lazy, Suspense } from "react";
import Header from "./Header";
import TaskTable from "./TaskTable";
import Loading from "./Loading";
import { useTransition } from "react-transition-state";
import { ProjectDataType } from "../types/types";

const GanttChart = lazy(() => import("./GanttChart"));

const Project = ({list}:{list:ProjectDataType[0]}) => {
  const [{ status, isMounted }, toggle] = useTransition({
    timeout: 500,
    mountOnEnter: true,
    unmountOnExit: true,
    preEnter: true,
  });

  return (
    <div className={`w-full flex flex-col gap-y-3 `}>
      {<Header list={list} isMounted={isMounted} toggle={toggle} />}

      {isMounted && (
        <div
          className={`transition duration-300 flex flex-col gap-y-3 ${
            status === "preEnter" || status === "exiting"
              ? " transform scale-75 opacity-0"
              : ""
          }`}
        >
          <Suspense fallback={<Loading />}>
            <TaskTable list={list.tasks} />
            <GanttChart />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default Project;
