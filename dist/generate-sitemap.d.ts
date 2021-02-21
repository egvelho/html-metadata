export declare function generateSitemap({ outDir, mapPathToImport, }: {
    outDir: string;
    mapPathToImport: (path: string) => Promise<any>;
}): Promise<void>;
