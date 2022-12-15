import Container, { Service } from "typedi";
import { AbstractMenuController } from "../domain/adapters/menu_controller_adapter";
import { MenuRepositoryAdapter } from "../domain/adapters/menu_repository_adapter";
import { MenuComplementModel, MenuComplementsOptionsModel, MenuModel, MenuTypeModel } from "../domain/entities/menu_models";
import { MenuRepository } from "../domain/menu_repository";

@Service()
export class MenuController {

    private readonly menuRepository = Container.get(MenuRepository);

    async menuTypes(): Promise<MenuTypeModel[]> {
        try {
            let menuTypeList = await this.menuRepository.getMenuTypes()
            return menuTypeList;
        } catch (error) {
            console.log(error);
            throw new Error("MenuTypeError in controller");
        }
    }

    async menuType(): Promise<MenuTypeModel[]> {
        try {
            let menuTypeList = await this.menuRepository.getMenuTypes()
            return menuTypeList;
        } catch (error) {
            console.log(error);
            throw new Error("MenuTypeError in controller");
        }
    }

    async menuList(): Promise<MenuModel[]> {
        try {
            let _menus = await this.menuRepository.getMenuList();
            return _menus;
        } catch (error) {
            console.log(error);
            throw new Error("MenuTypeError in controller");
        }
    }
  
    menuById(id: String): Promise<MenuModel> {
        throw new Error("Method not implemented.");
    }



    async complementsFromMenu(idMenu: String): Promise<Array<MenuComplementModel>> {
        try {
            let complements = await this.menuRepository.complementsFromMenu(idMenu);

            return complements;
        } catch (error) {
            console.log(error);
            throw new Error("MenuTypeError in controller");
        }
    }

    async optionsFromComplement(idComplement: String): Promise<MenuComplementsOptionsModel[]> {
        try {
            let options = await this.menuRepository.optionsFromComplement(idComplement);
            return options;
        } catch (error) {
            console.log(error);
            throw new Error("MenuTypeError in controller");
        }
    }


    async getComplement(idComplement: String): Promise<MenuComplementModel> {
        try {
            let complement = await this.menuRepository.complement(idComplement);
            return complement;
        } catch (error) {
            console.log(error);
            throw new Error("MenuTypeError in controller");

        }
    }

}