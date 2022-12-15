import { Container } from 'typedi'
import { env } from '../config/environment'
import log from 'npmlog'

export function loadEnvironment() {
    const productionModule = '../config/environment.prod'
    const developmentModule = '../config/environment.dev'
    const currentModule = process.env.NODE_ENV === 'production' ? productionModule : developmentModule

    try {

        const config: env = require(currentModule).environment

        if (!config) {
            throw new Error(`Module ${currentModule} does not export 'environment' variable.`)
        }

        Container.set('config', config)

    } catch (err: any) {

        if (err.code !== 'MODULE_NOT_FOUND') {
            log.error('', err)
        } else {
            log.error('', `Module "${currentModule}" not found!`)
        }

        process.exit(-1)
    }
}