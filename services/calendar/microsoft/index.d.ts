import { CalendarServiceType, ServiceOptions } from "src/services";
import { CalendarEvent, CreateEvent, CalendarInterface, UpdateEvent } from "..";
export declare class Microsoft extends CalendarInterface {
    protected opts: ServiceOptions;
    constructor(service: CalendarServiceType, opts: ServiceOptions);
    getEventById(id: string): Promise<CalendarEvent>;
    getEventFromRange(startDate: Date, endDate: Date, singleInstances: boolean): Promise<CalendarEvent[]>;
    createEvent(event: CreateEvent): Promise<string>;
    updateEvent(id: string, event: UpdateEvent): Promise<string>;
    deleteEventById(id: string): Promise<boolean>;
}
