import { Injectable } from "@graphql-modules/di";
import Container, { Inject, Service } from "typedi";
import { MenuModel } from "../../menu/domain/entities/menu_models";
import AssociateControllerAdapter, { } from "../domain/adapters/associate_controller_adapter";
import AssociateRepositoryAdapter from "../domain/adapters/associate_repository_adapter";
import { AssociateRepository } from "../domain/associate_repository";
import { AssociateModel } from "../domain/entities/associate_models";

@Service()
export class AssociateController implements AssociateControllerAdapter {
    constructor(private readonly repository: AssociateRepository) { }

    async getAssociates(): Promise<Array<AssociateModel>> {
        try {
            let associates = await this.repository.getAssociates();
            return associates;
        }
        catch (error) {
            console.log(error)
            throw new Error("Error in getAssociates")
        }
    }


    async getMenuListByIdAssociate(id: String): Promise<Array<MenuModel>> {

        try {
            let menuList = this.repository.getMenuListFromAssociate(id);

            return menuList;

        }
        catch (error) {
            console.log(error)
            throw new Error("Error in getAssociates")
        }
    }

}