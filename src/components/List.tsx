import { FaSort } from "react-icons/fa";
import { capitalize } from "../lib/utils/capitalize";
import Project from "./Project";
import { useState } from "react";
import { useTransition } from "react-transition-state";

import FormContainer from "./FormContainer";
import { ProjectDataType } from "../lib/formValidationSchemas";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export type ListProps = {
  list: ProjectDataType[] | [];
};
const List = ({ list }: ListProps) => {
  const [sortedRows, setRows] = useState(list);
  const [order, setOrder] = useState("asc");
  const [sortKey, setSortKey] = useState(Object.keys(list[0])[0]);
  const [{ status, isMounted }, toggle] = useTransition({
    timeout: 500,
    mountOnEnter: true,
    unmountOnExit: true,
    preEnter: true,
  
  });

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

  const sort = (value: keyof ProjectDataType, order: string) => {
    const returnValue = order === "desc" ? 1 : -1;

    setSortKey(value);
    setRows([
      ...sortedRows.sort((a, b) => {
        if (a[value] === undefined || b[value] === undefined) {
          return 0;
        }
        return a[value] > b[value] ? returnValue * -1 : returnValue;
      }),
    ]);
  };

  const updateOrder = () => {
    const updatedOrder = order === "asc" ? "desc" : "asc";

    setOrder(updatedOrder);
    sort(sortKey as keyof ProjectDataType, updatedOrder);
  };

  return (
    <div className="flex flex-col gap-y-3">
      <div className="flex gap-x-3 md:justify-between flex-wrap  gap-y-2">

          <FormContainer table="project" type="create" />
        <input
          type="text"
          placeholder="Search projects"
          onChange={filter}
          className="flex-1 p-2 rounded-lg outline-none bg-gray-100 "
        />
        <select
          onChange={(event) =>
            sort(event.target.value as keyof ProjectDataType, order)
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
          <FaSort className="text-WD_E&C-Terra-Cotta-Brown" />
        </button>
      </div>
      <div className="flex gap-x-3  items-center  bg-WD_E&C-Night-Shade p-2 rounded-lg overflow-x-scroll  no-scrollbar">
        <div className="flex gap-x-4 items-center">
          <span
            className="cursor-pointer flex items-center justify-center  rounded-lg w-6  h-6 "
            onClick={() => (!isMounted ? toggle(true) : toggle(false))}
          >
            {!isMounted ? (
              <MdOutlineKeyboardArrowRight className="fill-WD_E&C-Off-White w-6 h-6" />
            ) : (
              <MdOutlineKeyboardArrowDown className="fill-WD_E&C-Off-White w-6 h-6" />
            )}
          </span>
          {Object.keys(list[0]).map((entry, index) => (
            <>
              {entry != "subProject" && (
                <label className="w-[9rem] text-xl text-WD_E&C-Off-White" key={index}>
                  {capitalize(entry).replace("Project", "Project ")}
                </label>
              )}
            </>
          ))}
        </div>
      </div>
      {isMounted && (
        <div
          className={`transition duration-300 flex flex-col gap-y-3 ${
            status === "preEnter" || status === "exiting"
              ? " transform scale-75 opacity-0"
              : ""
          }`}
        >
          {sortedRows.map((item: ProjectDataType, index: number) => (
            <Project key={index} list={item} />
          ))}

          {!sortedRows.length && (
            <h1>No results... Try expanding the search</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default List;
