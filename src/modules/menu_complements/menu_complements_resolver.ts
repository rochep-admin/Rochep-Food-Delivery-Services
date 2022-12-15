import { FieldResolver, Query, Resolver, Root } from "type-graphql";
import Container from "typedi";
import { MenuController } from "../../services/menu/controller/menu_controller";
import { MenuComplementModel, MenuComplementsOptionsModel, MenuTypeModel } from "../../services/menu/domain/entities/menu_models";

@Resolver(() => MenuComplementModel)
export class MenuComplementResolver {
    private menuController: MenuController = Container.get(MenuController)


    @Query(() => [MenuComplementModel])
    async complements(): Promise<Array<MenuComplementModel>> {

        let complement = await this.menuController.getComplement("30801f0c-9c86-45a2-88c7-93158499b2f1")

        console.log(complement);

        return [complement];
    }

    @FieldResolver(() => [MenuComplementsOptionsModel])
    async options(@Root() complement: MenuComplementModel): Promise<Array<MenuComplementsOptionsModel>> {
        let _options = await this.menuController.optionsFromComplement(complement.id);
        return _options;
    }
}