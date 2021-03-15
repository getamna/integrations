import { ServiceOptions, MailServiceType } from "../..";
import { DraftMessage, MailInterface, Message, Thread } from "..";
export declare class Microsoft extends MailInterface {
    protected opts: ServiceOptions;
    constructor(service: MailServiceType, opts: ServiceOptions);
    send(message: DraftMessage): Promise<string>;
    saveDraft(message: DraftMessage): Promise<boolean>;
    getThread(_id: string): Promise<Thread>;
    getMessage(id: string): Promise<Message>;
    searchMail(query: string): Promise<Message[]>;
    getFolder(_folder: string): Promise<Message[]>;
    getThreads(_folder?: string): Promise<Thread[]>;
}
