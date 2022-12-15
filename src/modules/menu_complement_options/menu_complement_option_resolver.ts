import { FieldResolver, Query, Resolver, Root } from "type-graphql";
import Container from "typedi";
import { MenuController } from "../../services/menu/controller/menu_controller";
import { MenuComplementModel, MenuComplementsOptionsModel } from "../../services/menu/domain/entities/menu_models";

@Resolver(of => MenuComplementsOptionsModel)
class MenuComplementOptionResolver {

    private readonly controller = Container.get(MenuController);

    @Query(() => [MenuComplementsOptionsModel])
    async options(): Promise<Array<MenuComplementsOptionsModel>> {
        let options = await this.controller.optionsFromComplement("30801f0c-9c86-45a2-88c7-93158499b2f1")
        return options;
    }

    @FieldResolver(() => MenuComplementModel)
    async childComplement(@Root() option: MenuComplementsOptionsModel): Promise<MenuComplementModel> {
        let complement = await this.controller.getComplement(option.complement)
        return complement;
    }
}

export default MenuComplementOptionResolver;