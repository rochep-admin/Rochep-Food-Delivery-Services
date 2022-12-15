import Container, { Service } from "typedi";
import { ListMapper } from "../../../utils/interfaces/mapper";
import { MenuPgDataSource } from "../data/menu_pg_data_source";
import { MenuRepositoryAdapter } from "./adapters/menu_repository_adapter";
import { MenuTypeModel, MenuModel, MenuComplementModel, IMenuComplementsOptionsDataSourceModel, MenuComplementsOptionsModel } from "./entities/menu_models";
import { MenuComplementFromDataSourceToDomainMapper, MenuComplementOptionFromDataSourceToDomainMapper, MenuFromDataSourceToDomainMapper, MenuTypeMapperFromDataToDomain } from "./mappers/menu_mappers";

@Service()
export class MenuRepository implements MenuRepositoryAdapter {

    private readonly menuPgDataSource: MenuPgDataSource = Container.get(MenuPgDataSource);

    async getMenuTypes(): Promise<MenuTypeModel[]> {
        let _typesFromDataSource = await this.menuPgDataSource.menuTypes();

        let _mapper = new MenuTypeMapperFromDataToDomain()

        let menuTypes = new ListMapper(_mapper).map(_typesFromDataSource);

        return menuTypes;
    }

    async getMenuList(): Promise<MenuModel[]> {
        let _menuFromDataSource = await this.menuPgDataSource.menus();

        let _mapper = new MenuFromDataSourceToDomainMapper()

        let menuList = new ListMapper(_mapper).map(_menuFromDataSource);

        return menuList;
    }
    getMenuById(id: String): Promise<MenuModel> {
        throw new Error("Method not implemented.");
    }


    async complementsFromMenu(idMenu: String): Promise<Array<MenuComplementModel>> {
        let _menucomplementFromDataSource = await this.menuPgDataSource.complementsFromMenu(idMenu);

        let _mapper = new MenuComplementFromDataSourceToDomainMapper()

        let menuList = new ListMapper(_mapper).map(_menucomplementFromDataSource);

        return menuList;
    }



    async complement(idComplement: String): Promise<MenuComplementModel> {
        let _complement = await this.menuPgDataSource.complement(idComplement);

        let complement = new MenuComplementFromDataSourceToDomainMapper().map(_complement);

        return complement;
    }

    async optionsFromComplement(idComplement: String): Promise<Array<MenuComplementsOptionsModel>> {
        let _optionsFromComplementFromDataSource = await this.menuPgDataSource.optionsFromComplement(idComplement);

        let _mapper = new MenuComplementOptionFromDataSourceToDomainMapper()

        let menuList = new ListMapper(_mapper).map(_optionsFromComplementFromDataSource);

        return menuList;
    }
}