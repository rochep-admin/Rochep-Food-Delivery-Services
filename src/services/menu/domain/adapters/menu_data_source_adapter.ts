import { IMenuTypeDataSourceModel, IMenuModelDataSourceModel, IMenuComplementDataSourceModel, IMenuComplementsOptionsDataSourceModel } from "../entities/menu_models";

abstract class MenuDataSourceAdapter {
    abstract menuTypes(): Promise<IMenuTypeDataSourceModel[]>;
    abstract menus(): Promise<IMenuModelDataSourceModel[]>;
    abstract menuByIdAssociate(id: String): Promise<Array<IMenuModelDataSourceModel>>;
    abstract complementsFromMenu(idMenu: String): Promise<Array<IMenuComplementDataSourceModel>>;
    abstract optionsFromComplement(idComplement: String): Promise<Array<IMenuComplementsOptionsDataSourceModel>>;
    abstract complement(idComplement: String): Promise<IMenuComplementDataSourceModel>;
}
export default MenuDataSourceAdapter;