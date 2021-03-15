import { AxiosInstance } from "axios";
import RRule from "rrule";
import { CalendarServiceType, ServiceOptions } from "..";
export interface CalendarEvent {
    id: string;
    organizerName: string;
    subject: string;
    startTime: Date;
    endTime: Date;
    location?: string;
    attendees: EventAttendee[];
    meetingLink?: string;
    content: string;
    organizer: EventAttendee;
    recurrence: string[];
    recurrenceId?: string;
    calendarLink?: string;
    status: "cancelled" | "confirmed" | string;
}
export declare type RecurrenceRule = RRule;
export interface CreateEvent {
    subject: string;
    body: string;
    startTime: Date;
    endTime: Date;
    timeZone?: string;
    location?: string;
    attendees: EventAttendee[];
    type?: string;
    isOnlineMeeting?: boolean;
    onlineMeetingProvider?: string;
}
export declare type UpdateEvent = {
    startTime: Date;
    endTime: Date;
    timeZone: string;
} & Partial<CreateEvent>;
export interface EventAttendee {
    name: string;
    email: string;
    response?: string;
}
export declare enum AttendeeResponse {
    ACCEPT = 0,
    DECLINE = 1,
    MAYBE = 2
}
export declare abstract class CalendarInterface {
    protected opts: ServiceOptions;
    private authDetails;
    protected httpClient: AxiosInstance;
    constructor(service: CalendarServiceType, opts: ServiceOptions);
    validateServiceType(service: CalendarServiceType): void;
    abstract getEventById(id: string): Promise<CalendarEvent>;
    /**
     *
     * @param startDate - start date of events in UTC
     * @param endDate - end date date of events in UTC
     * @param singleInstances - Get recurring events as single instances
     */
    abstract getEventFromRange(startDate: Date, endDate: Date, singleInstances: boolean): Promise<CalendarEvent[]>;
    abstract createEvent(event: CreateEvent): Promise<string>;
    abstract updateEvent(id: string, event: UpdateEvent): Promise<string>;
    abstract deleteEventById(id: string): Promise<boolean>;
}
