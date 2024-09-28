/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from "react";
import InputField from "../InputFiled";
import { FieldError, useForm } from "react-hook-form";
import { createTask, updateTask } from "../../lib/actions";

const TaskForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
  setOpen: Dispatch<SetStateAction<boolean>>;
  relatedData?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      className="flex flex-col gap-8"
      onSubmit={handleSubmit(type === "create" ? createTask : updateTask)}
    >
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Create a new Task" : "Update the task"}
      </h1>
      <span className="text-xs text-gray-400 font-medium">
        Task Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Task Name"
          name="taskName"
          defaultValue={data?.taskName}
          register={register}
            error={errors?.projectName as FieldError | undefined}
        />
      
      </div>
      {errors.root && (
        <span className="text-red-500"> {errors.root.message}</span>
      )}
      <button type="submit" className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default TaskForm;
