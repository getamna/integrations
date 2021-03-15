import { CreateIssue, TeamInterface, TeamIssue } from '.';
import { ServiceOptions, TeamServiceType } from '..';
export default class TeamService extends TeamInterface {
    private teamService;
    constructor(service: TeamServiceType, opts: ServiceOptions);
    getWorkById(id: string, ownerName?: string, repoName?: string): Promise<TeamIssue>;
    searchAllIssues(organization: string, query: string, projectName?: string): Promise<TeamIssue[]>;
    createIssue(work: CreateIssue, ownerName?: string, reposName?: string): Promise<string>;
    deleteIssue(id: string, ownerName?: string, repoName?: string): Promise<boolean>;
}
