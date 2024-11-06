// import { TaskDataType } from "../types/types";
import { useEffect } from "react";
import { TaskDataType } from "../lib/formValidationSchemas";
import Table from "./Table";


const TaskTable = ({list}:{list?:TaskDataType[]}) => {
  useEffect(() => {
   console.log(list);
   
  }, [])
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
