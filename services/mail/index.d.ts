import { AxiosInstance } from 'axios';
import { ServiceOptions, MailServiceType } from '..';
export interface Message {
    id: string;
    subject: string;
    body: string;
    from: EmailContact;
    to: EmailContact[];
    cc?: EmailContact[];
    bcc?: EmailContact[];
}
export interface DraftMessage {
    subject: string;
    body: string;
    to: string[];
    cc?: string[];
    bcc?: string[];
    importance?: string;
    raw?: string;
}
export interface EmailContact {
    name: string;
    email: string;
}
export interface Thread {
    id: string;
    messages: Message[];
}
export interface SearchMessage {
    entityTypes: string[];
    query: string;
    from: number;
    size: number;
    topResult: boolean;
}
export declare abstract class MailInterface {
    protected opts: ServiceOptions;
    private authDetails;
    protected httpClient: AxiosInstance;
    constructor(service: MailServiceType, opts: ServiceOptions);
    validateServiceType(service: MailServiceType): void;
    abstract send(message: DraftMessage): Promise<string>;
    abstract saveDraft(message: DraftMessage): Promise<boolean>;
    abstract getThread(id: string): Promise<Thread>;
    abstract getMessage(id: string): Promise<Message>;
    abstract searchMail(query: string, maxLimit: number): Promise<Message[]>;
    abstract getFolder(folder: string): Promise<Message[]>;
    abstract getThreads(folder?: string): Promise<Thread[]>;
}
