import { AxiosInstance } from "axios";
import { ServiceOptions, TaskServiceType } from "..";
export interface CreateTask {
    title: string;
    dueDate?: {
        date?: Date;
        timezone?: string;
    };
}
export interface Task {
    id: string;
    projectId?: string;
    title: string;
    isCompleted?: boolean;
    dueDate?: {
        date?: Date;
        timezone?: string;
    };
    link?: string;
}
export interface TaskGroup {
    id: string;
    name: string;
}
export interface TaskUpdate {
    id?: string;
    title?: string;
    description?: string;
    dueDate?: {
        date?: Date;
        timezone?: string;
    };
}
export interface TaskGroupUpdate {
    id: string;
    name: string;
}
export declare abstract class TaskInterface {
    protected opts: ServiceOptions;
    private authDetails;
    protected httpClient: AxiosInstance;
    constructor(service: TaskServiceType, opts: ServiceOptions);
    validateServiceType(service: TaskServiceType): void;
    /**
     * Gets a group of tasks, lists all projects
     */
    abstract getAllTaskGroups(): Promise<TaskGroup[]>;
    /**
     * Gets a group of tasks, lists all projects
     */
    abstract getAllTasks(): Promise<Task[]>;
    /**
     * Gets a group of tasks, either by projects or task list
     */
    abstract getTaskGroup(taskListId: string): Promise<TaskGroup>;
    /**
     * Creates a group for tasks. Similar to a folder. Called TaskList in Outlook, and Projects in Todoist
     */
    abstract createTaskGroup(name: string): Promise<string>;
    /**
     * Updates a Task Group's Name.
     */
    abstract updateTaskGroup(id: string, name: string): Promise<boolean>;
    /**
     * Creates a Task and returns the id of the created task
     */
    abstract updateTask(id: string, taskDetails: Partial<TaskUpdate>, taskListId?: string): Promise<boolean>;
    /**
     * Delete a group of tasks, either by projects or task list and returns the id of the created group
     */
    abstract deleteTaskGroup(id: string): Promise<boolean>;
    /**
     * Creates a Task and returns the id of the created task
     */
    abstract createTask(createTask: CreateTask, taskListId?: string, dueDate?: Date): Promise<string>;
    /**
     * Get a Task by Id. If Outlook, a Task List ID must be provided
     */
    abstract getTaskById(id: string, taskListId?: string): Promise<Task>;
    /**
     * deletes a Task and returns the id of the created task
     */
    abstract deleteTask(id: string, taskListId?: string): Promise<boolean>;
}
