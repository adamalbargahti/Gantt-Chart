import List from "./List";

const data = [
  {
    projectName: "Geant",
    projectArea: "Vencia",
    projectPriority: "High",
    projectCategory: "Store",
    tasks:[]
  },
  {
    projectName: "Yanabe",
    projectArea: "Hawari",
    projectPriority: "Medium",
    projectCategory: "Storage",
    tasks:[
      {
      assignedTo: "Adam",
      scope: "Gantt Chart",
      startDate: "25-9-2024",
      endDate: "30-9-2024",
      duration: 5,
      Progress: 30,
      dependencies: "yan",
      status: "In Progress",
      timeIndex: " 22:30",
      files: "Click Here",
      notes: "Click Here",
    },
      {
      assignedTo: "Adam",
      scope: "Gantt Chart",
      startDate: "25-9-2024",
      endDate: "30-9-2024",
      duration: 5,
      Progress: 30,
      dependencies: "yan",
      status: "In Progress",
      timeIndex: " 22:30",
      files: "Click Here",
      notes: "Click Here",
    },
      {
      assignedTo: "Adam",
      scope: "Gantt Chart",
      startDate: "25-9-2024",
      endDate: "30-9-2024",
      duration: 5,
      Progress: 30,
      dependencies: "yan",
      status: "In Progress",
      timeIndex: " 22:30",
      files: "Click Here",
      notes: "Click Here",
    },
      {
      assignedTo: "Adam",
      scope: "Gantt Chart",
      startDate: "25-9-2024",
      endDate: "30-9-2024",
      duration: 5,
      Progress: 30,
      dependencies: "yan",
      status: "In Progress",
      timeIndex: " 22:30",
      files: "Click Here",
      notes: "Click Here",
    },
      {
      assignedTo: "Adam",
      scope: "Gantt Chart",
      startDate: "25-9-2024",
      endDate: "30-9-2024",
      duration: 5,
      Progress: 30,
      dependencies: "yan",
      status: "In Progress",
      timeIndex: " 22:30",
      files: "Click Here",
      notes: "Click Here",
    },
      {
      assignedTo: "Adam",
      scope: "Gantt Chart",
      startDate: "25-9-2024",
      endDate: "30-9-2024",
      duration: 5,
      Progress: 30,
      dependencies: "yan",
      status: "In Progress",
      timeIndex: " 22:30",
      files: "Click Here",
      notes: "Click Here",
    },
      {
      assignedTo: "Adam",
      scope: "Gantt Chart",
      startDate: "25-9-2024",
      endDate: "30-9-2024",
      duration: 5,
      Progress: 30,
      dependencies: "yan",
      status: "In Progress",
      timeIndex: " 22:30",
      files: "Click Here",
      notes: "Click Here",
    },
      {
      assignedTo: "Adam",
      scope: "Gantt Chart",
      startDate: "25-9-2024",
      endDate: "30-9-2024",
      duration: 5,
      Progress: 30,
      dependencies: "yan",
      status: "In Progress",
      timeIndex: " 22:30",
      files: "Click Here",
      notes: "Click Here",
    },
      {
      assignedTo: "Adam",
      scope: "Gantt Chart",
      startDate: "25-9-2024",
      endDate: "30-9-2024",
      duration: 5,
      Progress: 30,
      dependencies: "yan",
      status: "In Progress",
      timeIndex: " 22:30",
      files: "Click Here",
      notes: "Click Here",
    },
      {
      assignedTo: "Adam",
      scope: "Gantt Chart",
      startDate: "25-9-2024",
      endDate: "30-9-2024",
      duration: 5,
      Progress: 30,
      dependencies: "yan",
      status: "In Progress",
      timeIndex: " 22:30",
      files: "Click Here",
      notes: "Click Here",
    },
      {
      assignedTo: "Adam",
      scope: "Gantt Chart",
      startDate: "25-9-2024",
      endDate: "30-9-2024",
      duration: 5,
      Progress: 30,
      dependencies: "yan",
      status: "In Progress",
      timeIndex: " 22:30",
      files: "Click Here",
      notes: "Click Here",
    }
  ]
  },
  {
    projectName: "Mashreq",
    projectArea: "Qwarsha",
    projectPriority: "Low",
    projectCategory: "Basement",
    tasks:[{
      assignedTo: "Adam",
      scope: "Gantt Chart",
      startDate: "25-9-2024",
      endDate: "30-9-2024",
      duration: 5,
      Progress: 30,
      dependencies: "mm",
      status: "In Progress",
      timeIndex: " 22:30",
      files: "Click Here",
      notes: "Click Here",
    }]
  },
];
const ProjectList  = () => {
  return (
    <div>
      <List list={data} />
    </div>
  );
}

export default ProjectList