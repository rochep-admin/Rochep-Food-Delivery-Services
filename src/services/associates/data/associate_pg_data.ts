import { Injectable } from "@graphql-modules/di";
import { Knex } from "knex";
import { Inject, Service } from "typedi";
import { AssociateDataSourceModel } from "../domain/entities/associate_models";

@Service()
export class AssociatePgDataSource{

    constructor(@Inject('pg.Knex') private knex: Knex) { }

    async getAssociatesList(): Promise<AssociateDataSourceModel[]> {
        let associates: AssociateDataSourceModel[] = await this.knex('cat_associates')
            .where('is_available', true)
            .select('id', 'names', 'cover', 'rating', 'number_of_rating', 'time_of_service');
    
        return associates;
    }
    
}

