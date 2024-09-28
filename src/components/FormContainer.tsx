/* eslint-disable @typescript-eslint/no-explicit-any */
import FormModal from "./FormModal";

export type FormContainerProps = {
  table: "task" | "project";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number | string;
};

const FormContainer =  ({ table, type, data, id }: FormContainerProps) => {
  const relatedData = {};

  

  return (
    <div className="">
      <FormModal
        table={table}
        type={type}
        data={data}
        id={id}
        relatedData={relatedData}
      />
    </div>
  );
};

export default FormContainer;