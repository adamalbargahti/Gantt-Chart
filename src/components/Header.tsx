import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { ProjectDataType } from "../types/types";
import { useEffect } from "react";
import FormContainer from "./FormContainer";

interface HeaderProps {
  toggle: (value: boolean) => void;
  isMounted: boolean;
  list: ProjectDataType[0];
}

const Header: React.FC<HeaderProps> = ({ toggle, isMounted, list }) => {
  const headerList = Object.values(list).filter(
    (item) => typeof item === "string"
  );
  useEffect(() => {
    console.log(headerList);
  }, [headerList]);
  return (
    <div className="flex items-center h-[50px] justify-between bg-gray-200 p-2 rounded-lg overflow-x-scroll  no-scrollbar">
      <div className="flex min-w-[1280px]  items-center gap-x-2 ">
        <span
          className="cursor-pointer flex items-center justify-center hover:bg-gray-300 rounded-lg w-6  h-6 "
          onClick={() => (!isMounted ? toggle(true) : toggle(false))}
        >
          {!isMounted ? (
            <MdOutlineKeyboardArrowRight className="text-gray-500 w-6 h-6" />
          ) : (
            <MdOutlineKeyboardArrowDown className="text-gray-500 w-6 h-6" />
          )}
        </span>
        <div className="min-w-[1280px] flex gap-x-2 w-full">
          {headerList.map((item, index) => (
            <label className="w-[16.875rem]" key={index} htmlFor={item}>
              {item}
            </label>
          ))}
        </div>
      </div>
      <div className="flex gap-x-3 items-center w-[10%]  justify-end">
        <FormContainer table="project" type="update" />
        <FormContainer table="project" type="delete" />
      </div>
    </div>
  );
};

export default Header;
