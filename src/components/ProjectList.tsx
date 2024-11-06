import { data } from "../lib/data";
import List from "./List";


const ProjectList  = () => {
  return (
    <div>
      {data.length > 0 && <List list={data} />}
      
    </div>
  );
}

export default ProjectList