import { Suspense } from "react";
import { useTransition } from "react-transition-state";

import { SubProjectDataType } from "../lib/formValidationSchemas";
import Loading from "./Loading";
import TaskTable from "./TaskTable";
import GanttChart from "./GanttChart";
import Header from "./Header";

export type ListProps = {
  list: SubProjectDataType;
};
const SubProject = ({ list }: ListProps) => {
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
          className={`transition duration-300 flex flex-col gap-y-3 ml-12 ${
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

export default SubProject;
