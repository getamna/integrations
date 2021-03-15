import { ServiceOptions, TaskServiceType } from "src/services";
import { CreateTask, Task, TaskGroup, TaskInterface, TaskUpdate } from "..";
export declare class Todoist extends TaskInterface {
    protected opts: ServiceOptions;
    constructor(service: TaskServiceType, opts: ServiceOptions);
    createTask(task: CreateTask): Promise<string>;
    createTaskGroup(name: string): Promise<string>;
    getTaskById(id: string): Promise<Task>;
    getTaskGroup(taskListId: string): Promise<TaskGroup>;
    getAllTasks(): Promise<Task[]>;
    getAllTaskGroups(): Promise<TaskGroup[]>;
    updateTask(id: string, taskDetails: Partial<TaskUpdate>): Promise<boolean>;
    updateTaskGroup(id: string, name: string): Promise<boolean>;
    deleteTask(id: string): Promise<boolean>;
    deleteTaskGroup(id: string): Promise<boolean>;
}
