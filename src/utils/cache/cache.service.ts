import Redis from 'ioredis'
import { Inject, Service } from 'typedi'
import { ICacheService } from './cache.interface';


@Service()
export class CacheService implements ICacheService {

    @Inject('redis.client')
    private client: Redis;

    async set(key: string, value: string | Buffer, TTL?: number): Promise<void> {
        await this.client.set(key, value)

        if (TTL) {
            await this.client.expire(key, TTL)
        }
    }


    async get(key: string, asBuffer?: boolean): Promise<string | Buffer | null> {

        if (asBuffer) {
            return this.client.getBuffer(key)
        }

        return this.client.get(key)
    }
}