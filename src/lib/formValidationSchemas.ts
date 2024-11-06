import { z } from "zod";

export const taskSchema = z.object({
  assignedTo: z.string().min(1, { message: "Assigned To is required!" }),
  scope: z.string().min(1, { message: "Scope is required!" }),
  startDate: z.string().min(1, { message: "Start Date is required!" }),
  endDate: z.string().min(1, { message: "End Date is required!" }),
  duration: z.number().min(1, { message: "Duration is required!" }),
  Progress: z.number().min(1, { message: "Progress is required!" }),
  priority: z.string().min(1, { message: "Dependencies is required!" }),
  status: z.string().min(1, { message: "Status is required!" }),
  timeIndex: z.string().min(1, { message: "Time Index is required!" }),
  files: z.string().min(1, { message: "Files is required!" }),
  notes: z.string().min(1, { message: "Notes is required!" }),
});

export type TaskDataType = z.infer<typeof taskSchema>;

export const subProjectSchema = z.object({
  SubProjectName: z.string().min(1, { message: "Project Name is required!" }),
  SubProjectCode:z.string().min(1, { message: "Project Name is required!" }),
  tasks: z.array(taskSchema).optional(),
});

export type SubProjectDataType = z.infer<typeof subProjectSchema>;

export const projectSchema = z.object({
  projectName: z.string().min(1, { message: "Project Name is required!" }),
  projectArea: z.string().min(1, { message: "Project Area is required!" }),
  projectCategory: z
    .string()
    .min(1, { message: "Project Category is required!" }),
  subProject: z.array(subProjectSchema).optional(),
});

export type ProjectDataType = z.infer<typeof projectSchema>;
