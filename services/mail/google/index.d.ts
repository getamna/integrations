import { ServiceOptions, MailServiceType } from "../..";
import { DraftMessage, MailInterface, Message, Thread } from "..";
export declare class Google extends MailInterface {
    protected opts: ServiceOptions;
    constructor(service: MailServiceType, opts: ServiceOptions);
    send(message: DraftMessage): Promise<string>;
    saveDraft(message: DraftMessage): Promise<boolean>;
    getThread(_id: string): Promise<Thread>;
    searchMail(query: string, maxLimit?: number): Promise<Message[]>;
    getMessage(id: string): Promise<Message>;
    getFolder(_id: string): Promise<Message[]>;
    getThreads(_folder?: string): Promise<Thread[]>;
}
