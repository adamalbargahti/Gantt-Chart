import Header from "./Header";
import { useTransition } from "react-transition-state";
import { ProjectDataType } from "../lib/formValidationSchemas";
import ListForSubProject from "./ListForSubProject";

const Project = ({ list }: { list: ProjectDataType }) => {
  const [{ status, isMounted }, toggle] = useTransition({
    timeout: 500,
    mountOnEnter: true,
    unmountOnExit: true,
    preEnter: true,
  });

  return (
    <div className={`w-full flex flex-col gap-y-3 `}>
      {<Header list={list} isMounted={isMounted} toggle={toggle} />}

      {isMounted && (
        <div
          className={`transition duration-300 flex flex-col gap-y-3 ml-10 ${
            status === "preEnter" || status === "exiting"
              ? " transform scale-75 opacity-0"
              : ""
          }`}
        >
          <ListForSubProject list={list.subProject || []} />
        </div>
      )}
    </div>
  );
};

export default Project;
