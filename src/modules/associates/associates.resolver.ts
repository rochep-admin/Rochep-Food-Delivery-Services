import { FieldResolver, Query, Resolver, Root } from "type-graphql";
import Container from "typedi";
import { AssociateController } from "../../services/associates/controller/associate_controller";
import { AssociateModel } from "../../services/associates/domain/entities/associate_models";
import { MenuController } from "../../services/menu/controller/menu_controller";
import { MenuModel } from "../../services/menu/domain/entities/menu_models";

@Resolver(of => AssociateModel)
export class AssociateResolver {

    private readonly controller: AssociateController = Container.get(AssociateController);

    @Query(() => [AssociateModel])
    async associates(): Promise<Array<AssociateModel>> {
        let data = await this.controller.getAssociates();

        return data;
    }

    @FieldResolver(() => [MenuModel])
    async menu(@Root() associate: AssociateModel): Promise<Array<MenuModel>> {
        let _menus = await this.controller.getMenuListByIdAssociate(associate.id);
        return _menus;
    }
}