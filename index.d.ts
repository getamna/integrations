import { Authorizers, AuthDetails } from "./models/auth";
import { Subscription, UpdateEvent } from "./models/track";
import { MailServiceType, MailService, CalendarServiceType, TaskServiceType, TeamServiceType } from "./services";
import { CalendarService } from "./services/calendar/calendar";
import { TaskService } from "./services/tasks/task";
import TeamService from "./services/team/team";
export { MailServiceType, TaskServiceType, TeamServiceType, CalendarServiceType, };
export interface IntegrationOptions {
    authorizers?: Authorizers;
    onSubscriptionChanged?: (subscription: Subscription, changeType: UpdateEvent) => void;
}
export declare class Integrations {
    private opts;
    private authorizers;
    private subscriptions;
    constructor(opts: IntegrationOptions, token?: string);
    setupLibmon(): void;
    addAuthorizer(service: MailServiceType | CalendarServiceType | TaskServiceType, details: AuthDetails): AuthDetails;
    getAuthorizers(): Authorizers;
    trackItem(subscription: Subscription): number;
    getMailService(service: MailServiceType): MailService;
    getCalendarService(service: CalendarServiceType): CalendarService;
    getTaskService(service: TaskServiceType): TaskService;
    getTeamService(service: TeamServiceType): TeamService;
    stopTrackingItem(_subscription: Subscription): void;
    onSubscriptionChanged(subscription: Subscription, changeType: UpdateEvent): unknown;
}
