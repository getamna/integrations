export interface Subscription {
    id: string;
    uniqueUrl: string;
}
export declare enum UpdateEvent {
    MAIL = 0,
    EVENT = 1,
    MESSAGE = 2,
    THREAD = 3
}
export declare enum DemoCounter {
    MailActions = "Mail-Calls",
    CalendarActions = "Calendar-Calls",
    TaskServices = "Task-Services"
}
