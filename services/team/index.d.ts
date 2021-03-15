import { AxiosInstance } from 'axios';
import { ServiceOptions, TeamServiceType } from '..';
export interface TeamIssue {
    id: string;
    title: string;
    body: string;
    assignees: Assignee[];
}
export interface CreateIssue {
    title: string;
    body: string;
    assignees: string[];
}
export interface Assignee {
    id?: string;
    name: string;
}
export declare abstract class TeamInterface {
    protected opts: ServiceOptions;
    private authDetails;
    protected httpClient: AxiosInstance;
    constructor(service: TeamServiceType, opts: ServiceOptions);
    validateServiceType(service: TeamServiceType): void;
    abstract getWorkById(id: string, organization?: string, repoName?: string): Promise<TeamIssue>;
    abstract searchAllIssues(organization: string, query: string, projectName?: string): Promise<TeamIssue[]>;
    abstract createIssue(work: CreateIssue, organization?: string, reposName?: string): Promise<string>;
    abstract deleteIssue(id: string, organization?: string, repoName?: string): Promise<boolean>;
}
