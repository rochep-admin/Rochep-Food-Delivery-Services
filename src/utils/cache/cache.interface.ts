export interface ICacheService {
    set(key: string, value: string | Buffer, TTL?: number): Promise<void>;

    get(key: string, asBuffer?: boolean): Promise<string | Buffer | null>;
}