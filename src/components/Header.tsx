import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useEffect } from "react";
import FormContainer from "./FormContainer";
import { ProjectDataType, SubProjectDataType } from "../lib/formValidationSchemas";

interface HeaderProps {
  toggle: (value: boolean) => void;
  isMounted: boolean;
  list: ProjectDataType | SubProjectDataType;
}

const Header: React.FC<HeaderProps> = ({ toggle, isMounted, list }) => {
  const headerList = Object.values(list).filter(
    (item) => typeof item === "string"
  );
  useEffect(() => {
    console.log(headerList);
  }, [headerList]);
  return (
    <div className="ml-5 flex items-center h-[50px] justify-between bg-WD_E&C-Tinted-Slate p-2 rounded-lg overflow-x-scroll  no-scrollbar">
      <div className="flex w-full  items-center gap-x-2 ">
        <span
          className="cursor-pointer flex items-center justify-center rounded-lg w-6  h-6 "
          onClick={() => (!isMounted ? toggle(true) : toggle(false))}
        >
          {!isMounted ? (
            <MdOutlineKeyboardArrowRight className="w-6 h-6" />
          ) : (
            <MdOutlineKeyboardArrowDown className="w-6 h-6" />
          )}
        </span>
        <div className="flex w-[70%] ">
          {headerList.map((item, index) => (
            <label className="w-[10rem] text-lg " key={index} htmlFor={item}>
              {item}
            </label>
          ))}
        </div>
      </div>
      <div className="flex gap-x-3 items-center w-[10%]   justify-end">
        <FormContainer table="project" type="update" />
        <FormContainer table="project" type="delete" />
      </div>
    </div>
  );
};

export default Header;
