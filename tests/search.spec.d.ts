export interface SearchResult {
    id: string;
    title: string;
    subtitle?: string;
    type: string;
    related?: SearchResult[];
}
