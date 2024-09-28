import { useEffect, useState } from "react";
import { capitalize } from "../lib/utils/capitalize";
import { TaskDataType } from "../types/types";
import FormContainer from "./FormContainer";
import { FaSort } from "react-icons/fa6";

export type TableProps = {
  rows: TaskDataType | [];
};
const Table = ({ rows }: TableProps) => {
  const [sortedRows, setRows] = useState(rows);
  const [order, setOrder] = useState("asc");
  const [sortKey, setSortKey] = useState(Object.keys(rows[0] || {})[0]);

  const filter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value) {
      setRows([
        ...rows.filter((data) => {
          return Object.values(data).join("").toLowerCase().includes(value);
        }),
      ]);
    } else {
      setRows(rows);
    }
  };

  const sort = (value: keyof TaskDataType[0], order: string) => {
    const returnValue = order === "desc" ? 1 : -1;

    setSortKey(value);
    setRows([
      ...sortedRows.sort((a, b) => {
        return a[value] > b[value] ? returnValue * -1 : returnValue;
      }),
    ]);
  };

  const updateOrder = () => {
    const updatedOrder = order === "asc" ? "desc" : "asc";

    setOrder(updatedOrder);
    sort(sortKey as keyof TaskDataType[0], updatedOrder);
  };
  useEffect(() => {
    console.log(rows);
  }, [rows]);
  return (
    <div className="flex flex-col gap-y-3">
      <div className="flex gap-x-3 md:justify-between flex-wrap gap-y-2">
        <div className="flex border border-green-500  rounded-lg items-center w-[6.5rem]  justify-center gap-x-2 p-2">
          
          <FormContainer table="task" type="create" />
        </div>

        <input
          type="text"
          placeholder="Search tasks"
          disabled={!rows.length}
          onChange={filter}
          className="flex-1 p-2 rounded-lg outline-none bg-gray-100 "
        />
        <select
          disabled={!rows.length}
          onChange={(event) =>
            sort(event.target.value as keyof TaskDataType[0], order)
          }
          className="flex-1 p-2 rounded-lg outline-none bg-gray-100"
        >
          {Object.keys(rows[0] || {}).map((entry, index) => (
            <option value={entry} key={index}>
              Order by {capitalize(entry)}
            </option>
          ))}
        </select>
        <button className="flex items-center gap-x-2" onClick={updateOrder}>
          <FaSort className="text-gray-500" />
        </button>
      </div>
      <table className="w-full min-w-[1250px] border-2 border-gray-200">
        <thead>
          <tr className="border-b-2 border-gray-200 text-center">
            {Object.keys(rows[0] || {}).map((entry, index) => (
              <th className="border-r-2 border-gray-200 py-2 px-1 " key={index}>
                {capitalize(entry)}
              </th>
            ))}
            {rows.length > 0 && (
              <th className="border-r-2 border-gray-200 py-2 px-1">Actions</th>
            )}
          </tr>
        </thead>
        <tbody>
          {sortedRows.map((row, index) => (
            <tr key={index} className="border-b-2 border-gray-200 text-center">
              {Object.values(row).map((entry, columnIndex) => (
                <td
                  className="border-r-2 border-gray-200 py-2 "
                  key={columnIndex}
                >
                  {entry}
                </td>
              ))}

              <td className="  ">
                <div className="flex items-center justify-center gap-2">
                  <FormContainer table="task" type="update" />
                  {/* {role === "admin" && ( */}
                  <FormContainer table="task" type="delete" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {!sortedRows.length && rows.length > 0 && (
        <div className="w-full flex justify-center ">
          <h1 className="w-1/2  bg-red-100 border border-red-400  flex justify-center">
            No results found
          </h1>
        </div>
      )}
      {!rows.length && (
        <div className="w-full flex justify-center ">
          <h1 className="w-1/2  bg-red-100 border border-red-400  flex justify-center">
            No tasks found
          </h1>
        </div>
      )}
    </div>
  );
};

export default Table;
