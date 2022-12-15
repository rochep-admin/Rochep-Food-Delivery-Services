import { FieldResolver, Query, Resolver, Root } from "type-graphql";
import Container from "typedi";
import { MenuController } from "../../services/menu/controller/menu_controller";
import { MenuComplementModel, MenuModel } from "../../services/menu/domain/entities/menu_models";

@Resolver(of => MenuModel)
export class MenuResolver {
    private menuController: MenuController = Container.get(MenuController)

    @Query(() => [MenuModel])
    async menus(): Promise<Array<MenuModel>> {
        let _menus = await this.menuController.menuList();
        return _menus;
    }

    @FieldResolver(() => [MenuComplementModel])
    async complements(@Root() menu: MenuModel): Promise<Array<MenuComplementModel>> {

        let complements = await this.menuController.complementsFromMenu(menu.id);

        return complements
    }
}