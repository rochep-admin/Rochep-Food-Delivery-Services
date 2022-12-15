import { env } from "./environment";

export const environment: env = {
    /**
     * AWS
     */
    AWS: {
        REGION: 'us-east-2',

        ACCESS_ID: 'AKIAX2WSCMATQYZ3ILSF',

        ACCESS_KEY: "ifmcvU6RUJqJsX3bzZ9/X/aVP1O/U5V+J+BE+htb",

        BUCKET_NAME: 'vlokr',
    },
    /**
     * MongoDB
     */
    MONGO: { 
        URI:"mongodb://vlokr:mUxw%2BwGKZdYbtNSdcaNNp78Yb8qk828FZD88ducWFfI%3D@3.20.150.209:44892/?authSource=core&readPreference=primary&ssl=false", 
        // URI: "mongodb://localhost:27017/?readPreference=primary&ssl=false",
        DB: "DevCore"
    },
    /**
     * Redis
     */
    REDIS: {
        HOST: '3.20.150.209',

        PASSWORD: "ifmcvU6RUJqJsX3bzZ9/X/aVP1O/U5V+J+BE+htb",

        PORT: 6379
    },
    /**
     */
    EXPRESS: {
        // PORT: 4200,
        PORT: 80,

        MAX_BODY_SIZE: 5 * (1024 ** 2)
    },
    /**
     * Postgres
     */
    pgCore: {
        PGHOST: "3.20.150.209",

        PGUSER: "vlokr",

        PGPASSWORD: "jesus123",

        PGDATABASE: "vlokr",
        
        PGPORT: 5432
    },
    
    HOST:"http://vlokr.easywayservices.app",

    JWT: {
        TOKEN_SECRET: "password",
        ACCESS_TOKEN_EXP_TIME: 12340565,
        REFRESH_TOKEN_EXP_TIME: 123150120
    }
}