import { env } from "./environment";

export const environment: env = {
    /**
     * AWS
     */
    AWS: {
        REGION: 'us-east-2',
        ACCESS_ID: 'AKIAX2WSCMATQYZ3ILSF',
        ACCESS_KEY: "ifmcvU6RUJqJsX3bzZ9/X/aVP1O/U5V+J+BE+htb",
        BUCKET_NAME: 'vlokr-dev'
    },
    /**
     * MongoDB
     */
    MONGO: { 
        URI: "mongodb://rochep:XM4o$gv7Tl5J7ZMkhhIV@3.143.19.153:7028/?readPreference=primary&ssl=false",
        DB: "admin"
    },
    /**
     * Redis
     */
    REDIS: {
        HOST: '3.143.19.153',
        PASSWORD: "XM4o$gv7Tl5J7ZMkhhIV",
        PORT: 7027
    },
    /**
     * Express
     */
    EXPRESS: {
        PORT: 4200,

        MAX_BODY_SIZE: 5 * (1024 ** 2)
    },
    /**
     * Postgres
     */
    pgCore: {
        PGHOST: "rochep-dev.cluster-ro-cj7oddqfdzlm.us-east-2.rds.amazonaws.com",
        PGUSER: "postgres",
        PGPASSWORD: "XM4o$gv7Tl5J7ZMkhhIV",
        PGDATABASE: "rochep001",
        PGPORT: 5432
    },
    
    HOST:"http://localhost:4200",
    
    JWT: {
        TOKEN_SECRET: "password",
        ACCESS_TOKEN_EXP_TIME: 1234500065,
        REFRESH_TOKEN_EXP_TIME: 12300015120
    }
}