import { CalendarEvent } from "../services/calendar";
import { DraftMessage } from "../services/mail";
export declare function findValueInHeaders(name: string, obj: Gmail.Header[], unescape?: boolean): string;
export declare function convertToGoogleMessage(message: DraftMessage): GmailMessage.Message;
export declare function convertToEvent(evt: GoogleCalendar.Event): CalendarEvent | undefined;
export declare function convertToEventsArray(googleEvents: GoogleCalendar.Event[]): CalendarEvent[];
export declare function getRecurrenceDetails(event: GoogleCalendar.Event): string[];
