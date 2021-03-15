import { CreateTask, Task, TaskGroup, TaskInterface, TaskUpdate } from '.';
import { ServiceOptions, TaskServiceType } from '..';
export declare class TaskService extends TaskInterface {
    private taskService;
    constructor(service: TaskServiceType, opts: ServiceOptions);
    getTaskById(id: string, taskListId?: string): Promise<Task>;
    getAllTaskGroups(): Promise<TaskGroup[]>;
    getAllTasks(): Promise<Task[]>;
    getTaskGroup(taskListId: string): Promise<TaskGroup>;
    createTask(details: CreateTask, taskListId?: string, dueDate?: Date): Promise<string>;
    createTaskGroup(name: string): Promise<string>;
    updateTaskGroup(id: string, name: string): Promise<boolean>;
    deleteTaskGroup(id: string): Promise<boolean>;
    updateTask(id: string, taskDetails: Partial<TaskUpdate>, taskListId?: string): Promise<boolean>;
    deleteTask(id: string, taskListId?: string): Promise<boolean>;
}
