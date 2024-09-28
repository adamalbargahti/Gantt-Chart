import { FaSort } from "react-icons/fa";
import { capitalize } from "../lib/utils/capitalize";
import Project from "./Project";
import { ProjectDataType } from "../types/types";
import { useEffect, useState } from "react";
import FormContainer from "./FormContainer";

export type ListProps = {
  list: ProjectDataType;
};
const List = ({ list }: ListProps) => {
  const [sortedRows, setRows] = useState(list);
  const [order, setOrder] = useState("asc");
  const [sortKey, setSortKey] = useState(Object.keys(list[0])[0]);

  useEffect(() => {
    console.log(Object.keys(list[0]));
  }, []);

  const filter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value) {
      setRows([
        ...list.filter((data) => {
          return Object.values(data).join("").toLowerCase().includes(value);
        }),
      ]);
    } else {
      setRows(list);
    }
  };

  const sort = (value: keyof ProjectDataType[0], order: string) => {
    const returnValue = order === "desc" ? 1 : -1;

    setSortKey(value);
    setRows([
      ...sortedRows.sort((a, b) => {
        // Check if a[value] and b[value] are defined
        if (a[value] === undefined || b[value] === undefined) {
          return 0; // or handle the undefined case as needed
        }
        return a[value] > b[value] ? returnValue * -1 : returnValue;
      }),
    ]);
  };

  const updateOrder = () => {
    const updatedOrder = order === "asc" ? "desc" : "asc";

    setOrder(updatedOrder);
    sort(sortKey as keyof ProjectDataType[0], updatedOrder);
  };
  return (
    <div className="flex flex-col gap-y-3">
      <div className="flex gap-x-3 md:justify-between flex-wrap  gap-y-2">
        <div className="flex border border-green-500  rounded-lg items-center w-[6.5rem]  justify-center gap-x-2 p-2">
          <FormContainer table="project" type="create" />
        </div>
        <input
          type="text"
          placeholder="Search projects"
          onChange={filter}
          className="flex-1 p-2 rounded-lg outline-none bg-gray-100 "
        />
        <select
          onChange={(event) =>
            sort(event.target.value as keyof ProjectDataType[0], order)
          }
          className="flex-1 p-2 rounded-lg outline-none bg-gray-100"
        >
          {Object.keys(list[0]).map((entry, index) => (
            <option value={entry} key={index}>
              Order by {capitalize(entry)}
            </option>
          ))}
        </select>
        <button className="flex items-center gap-x-2" onClick={updateOrder}>
          <FaSort className="text-gray-500" />
        </button>
      </div>
      <div className="flex gap-x-3  items-center  bg-gray-100 p-2 rounded-lg overflow-x-scroll  no-scrollbar">
        <div className="  flex px-8 min-w-[1250px] gap-x-2 w-[91%]">
          {Object.keys(list[0]).map((entry, index) => (
            <>
              {entry != "tasks" && (
                <label className="w-[16.875rem]  " key={index}>
                  {capitalize(entry).replace("Project", "Project ")}
                </label>
              )}
            </>
          ))}
        </div>
      </div>
      {sortedRows.map((item: ProjectDataType[0], index: number) => (
        <Project key={index} list={item} />
      ))}

      {!sortedRows.length && <h1>No results... Try expanding the search</h1>}
    </div>
  );
};

export default List;
