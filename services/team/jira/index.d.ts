import { ServiceOptions, TeamServiceType } from "../../";
import { CreateIssue, TeamInterface, TeamIssue } from "..";
export declare class Jira extends TeamInterface {
    protected opts: ServiceOptions;
    constructor(service: TeamServiceType, opts: ServiceOptions);
    getWorkById(id: string, ownerDomain: string): Promise<TeamIssue>;
    searchAllIssues(_organization: string, _query: string): Promise<TeamIssue[]>;
    createIssue(work: CreateIssue, ownerDomain: string, projectId: string): Promise<string>;
    deleteIssue(id: string, ownerDomain: string): Promise<boolean>;
}
