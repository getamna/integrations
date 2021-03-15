import { Authorizers } from '../models/auth';
import { Subscription, UpdateEvent } from '../models/track';
export { MailService } from './mail/mail';
export declare enum MailServiceType {
    Google = "Google",
    Microsoft = "Microsoft"
}
export declare enum CalendarServiceType {
    Microsoft = "Microsoft",
    Google = "Google"
}
export declare enum TaskServiceType {
    Microsoft = "Microsoft",
    Todoist = "Todoist",
    Google = "Google"
}
export declare enum TeamServiceType {
    ADO = "ADO",
    Jira = "Jira",
    Asana = "Asana",
    Github = "Github"
}
export interface ServiceOptions {
    authorizers: Authorizers;
    onSubscription: (subscription: Subscription, changeType: UpdateEvent) => void;
    subscriptions?: Subscription[];
}
export declare abstract class BaseService {
    protected opts: ServiceOptions;
    constructor(opts: ServiceOptions);
    validateServiceType(service: MailServiceType | CalendarServiceType | TaskServiceType | TeamServiceType): void;
}
