import knex from "knex";
import { log } from "npmlog";
import Container, { Service } from "typedi";
import { env } from "../config/environment";
import { Client } from "pg"

export async function loadDatabasePostgres() {
    const config = Container.get<env>('config')

    try {
        const DATABASE_CREDENTIALS = {
            host: config.pgCore.PGHOST,
            user: config.pgCore.PGUSER,
            password: config.pgCore.PGPASSWORD,
            database: config.pgCore.PGDATABASE,
            port: config.pgCore.PGPORT
        }

        const pgKnex = knex({
            client: 'pg',
            connection: DATABASE_CREDENTIALS,
            pool: { min: 0, max: 1 }
        })
        var client: Client = new Client(DATABASE_CREDENTIALS);


        Container.set('pg.Knex', pgKnex);

        console.log("success postgres configure succeeded ")

    } catch (err: any) {

        log('error', 'error', err)
        process.exit(-1)
    }
}