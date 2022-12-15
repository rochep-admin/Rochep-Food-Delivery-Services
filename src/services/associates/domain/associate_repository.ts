import { Injectable } from "@graphql-modules/di";
import { Service } from "typedi";
import { ListMapper } from "../../../utils/interfaces/mapper";
import { MenuPgDataSource } from "../../menu/data/menu_pg_data_source";
import { MenuModel } from "../../menu/domain/entities/menu_models";
import { MenuFromDataSourceToDomainMapper } from "../../menu/domain/mappers/menu_mappers";
import { AssociatePgDataSource } from "../data/associate_pg_data";
import AssociateRepositoryAdapter from "./adapters/associate_repository_adapter";
import { AssociateModel } from "./entities/associate_models";
import { AssociateMapperFromDataToDomain } from "./mappers/associate_mappers";

@Service()
export class AssociateRepository implements AssociateRepositoryAdapter {

    constructor(private readonly associatePgDataSource: AssociatePgDataSource
        , private readonly menuePgDataSource: MenuPgDataSource) { }

    async getAssociates(): Promise<Array<AssociateModel>> {
        let _associates = await this.associatePgDataSource.getAssociatesList();

        let mapper = new AssociateMapperFromDataToDomain()
        let associates = new ListMapper(mapper).map(_associates);

        return associates
    }


    async getMenuListFromAssociate(id: String): Promise<Array<MenuModel>> {
        let _menuList = await this.menuePgDataSource.menuByIdAssociate(id);

        let mapper = new MenuFromDataSourceToDomainMapper();

        let menuListFromAssociate = new ListMapper(mapper).map(_menuList);

        return menuListFromAssociate
    }
}