import { connect } from "mongoose";
import { log } from "npmlog";
import Container, { Service } from "typedi";
import { env } from "../config/environment";


export async function loadDatabaseMongo() {
    const config = Container.get<env>('config')

    try {
        await connect(config.MONGO.URI, { dbName: config.MONGO.DB })
        console.log('mongo connection','connection established','');
    } catch (err: any) {
        log('error', 'error', err)
        process.exit(-1)
    }
}