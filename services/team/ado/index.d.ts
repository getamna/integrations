import { TeamServiceType, ServiceOptions } from "../../";
import { CreateIssue, TeamInterface, TeamIssue } from "..";
export declare class ADO extends TeamInterface {
    protected opts: ServiceOptions;
    constructor(service: TeamServiceType, opts: ServiceOptions);
    getWorkById(id: string, ownerDomain: string, projectName: string): Promise<TeamIssue>;
    searchAllIssues(_organization: string, query: string, projectName: string): Promise<TeamIssue[]>;
    createIssue(_work: CreateIssue, ownerDomain: string, projectName: string): Promise<string>;
    deleteIssue(id: string, ownerDomain: string, projectName: string): Promise<boolean>;
}
