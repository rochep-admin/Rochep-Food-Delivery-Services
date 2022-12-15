import { MenuComplementModel, MenuComplementsOptionsModel, MenuModel, MenuTypeModel } from "../entities/menu_models";



export abstract class AbstractMenuController {
    abstract getMenuTypes(): Promise<Array<MenuTypeModel>>;

    abstract getMenuList(): Promise<Array<MenuModel>>;

    abstract getMenuById(id: String): Promise<MenuModel>;

    abstract getComplementsFromMenu(id: String): Promise<Array<MenuComplementModel>>;

    abstract getOptionsFromComplement(idComplement: String): Promise<Array<MenuComplementsOptionsModel>>;
    
    abstract getComplementById(idComplement: String): Promise<MenuComplementModel>
}
