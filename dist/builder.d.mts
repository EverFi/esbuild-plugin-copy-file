export interface Builder {
    env: string;
    hasInitialBuild: boolean;
    build(): Promise<void>;
    dev(start: () => void): void | Promise<void>;
}
