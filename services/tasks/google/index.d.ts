import { ServiceOptions, TaskServiceType } from "src/services";
import { CreateTask, Task, TaskGroup, TaskInterface, TaskUpdate } from "..";
export declare class Google extends TaskInterface {
    protected opts: ServiceOptions;
    constructor(service: TaskServiceType, opts: ServiceOptions);
    getAllTaskGroups(): Promise<TaskGroup[]>;
    getAllTasks(): Promise<Task[]>;
    getTaskGroup(taskListId: string): Promise<TaskGroup>;
    createTaskGroup(name: string): Promise<string>;
    updateTaskGroup(id: string, name: string): Promise<boolean>;
    updateTask(id: string, taskDetails: Partial<TaskUpdate>, taskListId?: string): Promise<boolean>;
    deleteTaskGroup(id: string): Promise<boolean>;
    createTask(createTask: CreateTask, taskListId?: string): Promise<string>;
    getTaskById(id: string, taskListId?: string): Promise<Task>;
    deleteTask(id: string, taskListId?: string): Promise<boolean>;
}
