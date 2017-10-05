export interface INbpPages {
    label: string;
    status: 'active' | 'done' | 'todo';
}
export interface INbpPagingConfiguration {
    currentParentLabel: string;
    pages: Array<INbpPages>;
}
