import { Service } from "typedi";
import { loadEnvironment } from "./environment.loader";
import { loadDatabaseMongo } from "./mongo.loader";
import { loadDatabasePostgres } from "./pg.loader";
import { loadRedis } from "./redis.loader";


export async function init() {
  loadEnvironment();
  await loadDatabaseMongo();
  await loadDatabasePostgres();
  await loadRedis();
}
