import { Knex } from "knex";
import { Inject, Service } from "typedi";
import MenuDataSourceAdapter from "../domain/adapters/menu_data_source_adapter";
import { IMenuComplementDataSourceModel, IMenuComplementsOptionsDataSourceModel, IMenuModelDataSourceModel, IMenuTypeDataSourceModel } from "../domain/entities/menu_models";

@Service()
export class MenuPgDataSource implements MenuDataSourceAdapter {

    constructor(@Inject('pg.Knex') private knex: Knex) { }

    async menuTypes(): Promise<IMenuTypeDataSourceModel[]> {
        let menu_types: IMenuTypeDataSourceModel[] = await this.knex('cat_menu_types')
            .select('id', 'name', 'description', 'cover')
            .where('is_available', true);

        return menu_types
    }
    async menus(): Promise<IMenuModelDataSourceModel[]> {
        let menuList: IMenuModelDataSourceModel[] = await this.knex('cat_menu')
            .where('is_available', true)
            .select('id', 'name', 'cover', 'description', 'price', 'menu_type');

        return menuList;
    }

    async menuByIdAssociate(id: String): Promise<Array<IMenuModelDataSourceModel>> {
        let menu: Array<IMenuModelDataSourceModel> = await this.knex('cat_menu')
            .where('is_available', true)
            .where('cat_associates_id', id)
            .select('id', 'name', 'cover', 'description', 'price', 'menu_type');

        return menu;
    }

    async complementsFromMenu(idMenu: String): Promise<Array<IMenuComplementDataSourceModel>> {
        let complements: IMenuComplementDataSourceModel[] = await this.knex('cat_menu_complements')
            .where('cat_menu_idu', idMenu)
            .select('id', 'name', 'order_to_ask', 'description', 'is_required', 'is_selectable', 'max_selectable');
        return complements;
    }


    async complement(idComplement: String): Promise<IMenuComplementDataSourceModel> {
        let complement: IMenuComplementDataSourceModel = await this.knex('cat_menu_complements')
            .where('id', idComplement)
            .select('id', 'name', 'order_to_ask', 'description', 'is_required', 'is_selectable', 'max_selectable').first();
        return complement;
    }

    async optionsFromComplement(idComplement: String): Promise<Array<IMenuComplementsOptionsDataSourceModel>> {
        let options: IMenuComplementsOptionsDataSourceModel[] = await this.knex('cat_menu_complements_options')
            .where('cat_menu_complements_idu', idComplement)
            .select('id', 'name', 'order_to_ask', 'description', 'is_chargable', 'is_default', 'price', 'complement');
        return options;
    }
}