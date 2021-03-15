import { CalendarEvent } from "src/services/calendar";
import { Message } from "src/services/mail";
export declare function convertToEvent(evt: OutlookCalendar.Event): CalendarEvent;
export declare function convertToMessageArray(msg: OutlookSearchedMessage.RootObject): Message[];
export declare function convertToEventsArray(outlookEvents: OutlookCalendar.Event[]): CalendarEvent[];
export declare function getRecurrenceDetails(outlookEvent: OutlookCalendar.Event): string[];
