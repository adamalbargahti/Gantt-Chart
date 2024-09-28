import { TaskDataType } from "../types/types";
import Table from "./Table";


const TaskTable = ({list}:{list?:TaskDataType}) => {
  return (
    <div
      className={`overflow-scroll no-scrollbar ${
        (list?.length || 0) <= 10 ? "h-auto" : "h-[400px]"
      }  `}
    >
      <Table rows={list || []}  />
    </div>
  );
};

export default TaskTable;
