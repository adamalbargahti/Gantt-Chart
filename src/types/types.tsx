export type TaskDataType = {
  assignedTo: string;
  scope: string;
  startDate: string;
  endDate: string;
  duration: number;
  Progress: number;
  dependencies: string;
  status: string;
  timeIndex: string;
  files: string;
  notes: string;
}[];
export type ProjectDataType = {
  projectName: string;
  projectArea: string;
  projectPriority: string;
  projectCategory: string;
  tasks?:TaskDataType
}[];
