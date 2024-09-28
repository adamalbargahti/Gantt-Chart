import { Chart } from "react-google-charts";

const columns = [
  { type: "string", label: "Task ID" },
  { type: "string", label: "Task Name" },
  { type: "string", label: "Resource" },
  { type: "date", label: "Start Date" },
  { type: "date", label: "End Date" },
  { type: "number", label: "Duration" },
  { type: "number", label: "Percent Complete" },
  { type: "string", label: "Dependencies" },
];

const rows = [
  [
    "2024Spring",
    "Spring 2024",
    "spring",
    new Date(2024, 2, 22),
    new Date(2026, 1, 1),
    null,
    95,
    null,
  ],
  [
    "2024Summer",
    "Summer 2024",
    "summer",
    new Date(2024, 5, 21),
    new Date(2024, 8, 20),
    null,
    100,
    null,
  ],
  [
    "2024Autumn",
    "Autumn 2024",
    "autumn",
    new Date(2024, 8, 21),
    new Date(2024, 11, 20),
    null,
    100,
  "2024Summer",
  ],
  [
    "2024Winter",
    "Winter 2024",
    "winter",
    new Date(2024, 11, 21),
    new Date(2025, 2, 21),
    null,
    100,
    null,
  ],
  [
    "2025Spring",
    "Spring 2025",
    "spring",
    new Date(2025, 2, 22),
    new Date(2025, 5, 20),
    null,
    50,
    null,
  ],
  [
    "2025Summer",
    "Summer 2025",
    "summer",
    new Date(2025, 5, 21),
    new Date(2025, 8, 20),
    null,
    0,
    null,
  ],
  [
    "2025Autumn",
    "Autumn 2025",
    "autumn",
    new Date(2025, 8, 21),
    new Date(2025, 11, 20),
    null,
    0,
    null,
  ],
  [
    "2025Winter",
    "Winter 2025",
    "winter",
    new Date(2024, 11, 21),
    new Date(2025, 2, 21),
    null,
    0,
    null,
  ],
  [
    "Football",
    "Football Season",
    "sports",
    new Date(2024, 8, 4),
    new Date(2025, 1, 1),
    null,
    100,
    null,
  ],
  [
    "Baseball",
    "Baseball Season",
    "sports",
    new Date(2025, 2, 31),
    new Date(2025, 9, 20),
    null,
    14,
    null,
  ],
  [
    "Basketball",
    "Basketball Season",
    "sports",
    new Date(2024, 9, 28),
    new Date(2025, 5, 20),
    null,
    86,
    null,
  ],
];

 const data = [columns, ...rows];

 const options = {
  height: 400,
  gantt: {
    trackHeight: 30,
    criticalPathEnabled: false,
    arrow: {
      angle: 50,
      width: 1,
      color: 'black',
      radius: 2
    },
    labelStyle: {
      fontName: 'Open Sans',
      fontSize: 14,
      color: 'white'
    },
    
  

  },
};

const GanttChart = () => {
  return (
    <div className="w-full  h-[410px] border border-gray-300 overflow-y-scroll no-scrollbar">
       <Chart
        chartType="Gantt"
        data={data}
        options={options}
      />
    </div>
     
  );
};
export default GanttChart;
