export interface env {
    /**
     * AWS
     */
    AWS: {
        REGION: string,
        ACCESS_ID: string,
        ACCESS_KEY: string,
        BUCKET_NAME: string,
    },
    /**
     * MongoDB
     */
    MONGO: {
        URI: string,

        DB: string,
    },
    /**
     * Redis
     */
    REDIS: {
        HOST: string,
        PASSWORD: string,
        PORT: number,
    },
    /**
     * Express
     */
    EXPRESS: {
        PORT: number,
        MAX_BODY_SIZE: number
    },

    pgCore: {
        PGHOST: string,
        PGUSER: string,
        PGPASSWORD: string,
        PGDATABASE: string,
        PGPORT: number
    },

    HOST: string,


    JWT: {
        TOKEN_SECRET: string,
        ACCESS_TOKEN_EXP_TIME: number,
        REFRESH_TOKEN_EXP_TIME: number
    }
}