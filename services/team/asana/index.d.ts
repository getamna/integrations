import { ServiceOptions, TeamServiceType } from "../../";
import { CreateIssue, TeamInterface, TeamIssue } from "..";
export declare class Asana extends TeamInterface {
    protected opts: ServiceOptions;
    constructor(service: TeamServiceType, opts: ServiceOptions);
    getWorkById(id: string): Promise<TeamIssue>;
    /** organization is the workspace ID */
    searchAllIssues(organization: string, query: string): Promise<TeamIssue[]>;
    /**Asana requires projectId or workspaceId, workspaceId used here **/
    createIssue(work: CreateIssue, id: string): Promise<string>;
    deleteIssue(id: string): Promise<boolean>;
}
