export declare function generateSitemap({ outPath, mapPathToImport, }: {
    outPath?: string;
    mapPathToImport: (path: string) => Promise<any>;
}): Promise<void>;
