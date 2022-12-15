import { Query, Resolver } from "type-graphql";
import Container from "typedi";
import { MenuController } from "../../services/menu/controller/menu_controller";
import { MenuComplementModel, MenuTypeModel } from "../../services/menu/domain/entities/menu_models";


@Resolver(of => MenuTypeModel)
class MenuTypesResolver {

    private readonly menuController = Container.get(MenuController);

    @Query(() => [MenuTypeModel])
    async menuTypes(): Promise<Array<MenuTypeModel>> {
        let types = await this.menuController.menuTypes();        
        return types;
    }

}

export default MenuTypesResolver;