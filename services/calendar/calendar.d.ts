import { CalendarEvent, CalendarInterface, CreateEvent, UpdateEvent } from ".";
import { CalendarServiceType, ServiceOptions } from "..";
export declare class CalendarService extends CalendarInterface {
    private calendarService;
    constructor(service: CalendarServiceType, opts: ServiceOptions);
    getEventById(id: string): Promise<CalendarEvent>;
    getEventFromRange(startDate: Date, endDate: Date, singleInstances: boolean): Promise<CalendarEvent[]>;
    createEvent(event: CreateEvent): Promise<string>;
    updateEvent(id: string, event: UpdateEvent): Promise<string>;
    deleteEventById(id: string): Promise<boolean>;
}
