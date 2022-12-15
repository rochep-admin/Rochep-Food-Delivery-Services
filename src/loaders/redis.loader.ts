import { Container } from 'typedi'
import Redis from 'ioredis'
import { env } from '../config/environment'
import log from 'npmlog'

export async function loadRedis() {

    const config = Container.get<env>('config')

    const redis = new Redis(config.REDIS.PORT, config.REDIS.HOST, { password: config.REDIS.PASSWORD, lazyConnect: true })

    try {
        await redis.connect()
        
        Container.set('redis.client', redis)

        console.log('redis connection','connection established','')

    } catch (error) {

        log.error('', `Error connecting to Redis on host: "${config.REDIS.HOST}" and port: "${config.REDIS.PORT}"`)

        process.exit(-1)
    }
}