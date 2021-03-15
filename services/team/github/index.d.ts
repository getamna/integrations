import { ServiceOptions, TeamServiceType } from '../../';
import { CreateIssue, TeamInterface, TeamIssue } from '..';
export declare class Github extends TeamInterface {
    protected opts: ServiceOptions;
    constructor(service: TeamServiceType, opts: ServiceOptions);
    getWorkById(id: string, ownerName?: string, repoName?: string): Promise<TeamIssue>;
    searchAllIssues(organization: string, query: string): Promise<TeamIssue[]>;
    createIssue(work: CreateIssue, ownerName?: string, reposName?: string): Promise<string>;
    deleteIssue(_id: string): Promise<boolean>;
}
