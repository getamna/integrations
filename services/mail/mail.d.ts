import { ServiceOptions, MailServiceType } from "..";
import { DraftMessage, MailInterface, Message, Thread } from ".";
export declare class MailService extends MailInterface {
    private mailService;
    constructor(service: MailServiceType, opts: ServiceOptions);
    send(message: DraftMessage): Promise<string>;
    saveDraft(message: DraftMessage): Promise<boolean>;
    getThread(id: string): Promise<Thread>;
    getMessage(id: string): Promise<Message>;
    searchMail(query: string, maxLimit: number): Promise<Message[]>;
    getFolder(folder: string): Promise<Message[]>;
    /**
     * Get a List of Emails, Defaults to the Inbox. Also used for polling as needed
     */
    getThreads(folder?: string): Promise<Thread[]>;
}
