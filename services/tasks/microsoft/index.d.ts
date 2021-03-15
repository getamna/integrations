import { ServiceOptions, TaskServiceType } from "src/services";
import { CreateTask, Task, TaskGroup, TaskInterface, TaskUpdate } from "..";
export declare class Microsoft extends TaskInterface {
    protected opts: ServiceOptions;
    constructor(service: TaskServiceType, opts: ServiceOptions);
    createTaskGroup(name: string): Promise<string>;
    createTask(task: CreateTask, taskListId?: string): Promise<string>;
    getTaskById(id: string, taskListId?: string): Promise<Task>;
    getTaskGroup(taskListId: string): Promise<TaskGroup>;
    getAllTaskGroups(): Promise<TaskGroup[]>;
    getAllTasks(): Promise<Task[]>;
    updateTaskGroup(id: string, name: string): Promise<boolean>;
    updateTask(id: string, taskDetails: Partial<TaskUpdate>, taskListId?: string): Promise<boolean>;
    deleteTaskGroup(id: string): Promise<boolean>;
    deleteTask(id: string, taskListId?: string): Promise<boolean>;
}
