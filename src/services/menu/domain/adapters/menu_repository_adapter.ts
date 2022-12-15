import { MenuComplementModel, MenuModel, MenuTypeModel } from "../entities/menu_models";

export abstract class MenuRepositoryAdapter {
    abstract getMenuTypes(): Promise<Array<MenuTypeModel>>;

    abstract getMenuList(): Promise<Array<MenuModel>>;

    abstract getMenuById(id: String): Promise<MenuModel>;

    abstract complementsFromMenu(idMenu: String): Promise<Array<MenuComplementModel>>;
    
    abstract complement(idComplement: String): Promise<MenuComplementModel>;
}