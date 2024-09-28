/* eslint-disable @typescript-eslint/no-explicit-any */
// import {
//   createTask,
//   updateTask,
//   deleteTask,
// } from "@/lib/actions";
import { Dispatch, lazy, SetStateAction, Suspense, useState } from "react";

import { FormContainerProps } from "./FormContainer";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import Loading from "./Loading";
import { IoCloseSharp } from "react-icons/io5";

const TaskForm = lazy(() => import("./forms/TaskForm"));
const ProjectForm = lazy(() => import("./forms/ProjectForm"));

const forms: {
  [key: string]: (
    setOpen: Dispatch<SetStateAction<boolean>>,
    type: "create" | "update",
    data?: any,
    relatedData?: any
  ) => JSX.Element;
} = {
  task: (setOpen, type, data, relatedData) => (
    <Suspense fallback={<Loading />}>
      <TaskForm
        type={type}
        data={data}
        setOpen={setOpen}
        relatedData={relatedData}
      />
    </Suspense>
  ),
  project: (setOpen, type, data, relatedData) => (
    <Suspense fallback={<Loading />}>
      <ProjectForm
        type={type}
        data={data}
        setOpen={setOpen}
        relatedData={relatedData}
      />
    </Suspense>
  ),
};

const FormModal = ({
  table,
  type,
  data,
  id,
  relatedData,
}: FormContainerProps & { relatedData?: any }) => {
  const size = type === "create" ? "w-full" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-Yellow"
      : type === "update"
      ? "bg-Sky"
      : "bg-Purple";

  const [open, setOpen] = useState(false);

  const Form = () => {
    return type === "delete" || id ? (
      <form className="p-4 flex flex-col gap-4">
        <input type="text | number" name="id" value={id} hidden />
        <span className="text-center font-medium">
          All data will be lost. Are you sure you want to delete this {table}?
        </span>
        <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
          Delete
        </button>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table](setOpen, type, data, relatedData)
    ) : (
      "Form not found!"
    );
  };

  return (
    <>
      <button
        className={`${size} flex items-center justify-center gap-x-2 ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        {type === "create" ? (
          <FaPlus className="text-gray-500 w-5 h-5" />
        ) : type === "delete" ? (
          <FaTrash className="text-red-500" />
        ) : (
          <FaEdit className="text-gray-500" />
        )}
        {type === "create" && table === "task" ? "Add":""}
        {type === "create" && table === "project" ? "Create":""}
      </button>
      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <IoCloseSharp className="text-gray-500 hover:text-red-700 w-6 h-6" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
