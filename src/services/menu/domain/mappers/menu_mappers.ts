import { Mapper } from "../../../../utils/interfaces/mapper";
import { IMenuComplementDataSourceModel, IMenuComplementsOptionsDataSourceModel, IMenuModelDataSourceModel, MenuComplementModel, MenuComplementsOptionsModel, MenuModel, IMenuTypeDataSourceModel, MenuTypeModel, } from "../entities/menu_models";

class MenuTypeMapperFromDataToDomain implements Mapper<IMenuTypeDataSourceModel, MenuTypeModel> {
    map(input: IMenuTypeDataSourceModel): MenuTypeModel {
        return {
            id: input.id,
            name: input.name,
            coverUrl: input.cover,
            description: input.description
        }
    }
}

class MenuFromDataSourceToDomainMapper implements Mapper<IMenuModelDataSourceModel, MenuModel> {
    map(input: IMenuModelDataSourceModel): MenuModel {
        return {
            id: input.id,
            name: input.name,
            description: input.description,
            coverUrl: input.cover,
            menu_type: input.menu_type,
            price: input.price,
        }
    }
}

class MenuComplementFromDataSourceToDomainMapper implements Mapper<IMenuComplementDataSourceModel, MenuComplementModel> {
    map(input: IMenuComplementDataSourceModel): MenuComplementModel {
        return {
            id: input.id,
            name: input.name,
            description: input.description,
            maxSelectable: input.max_selectable,
            orderToAsk: input.order_to_ask,
            required: input.is_required
        }
    }
}

class MenuComplementOptionFromDataSourceToDomainMapper implements Mapper<IMenuComplementsOptionsDataSourceModel, MenuComplementsOptionsModel> {
    map(input: IMenuComplementsOptionsDataSourceModel): MenuComplementsOptionsModel {
        return {
            id: input.id,
            name: input.name,
            description: input.description,
            isChargable:input.is_chargable,
            isDefault:input.is_default,
            orderToAsk:input.order_to_ask,
            price:input.price,
            complement:input.complement??''
        }
    }
}

export { MenuTypeMapperFromDataToDomain, MenuFromDataSourceToDomainMapper,MenuComplementFromDataSourceToDomainMapper,MenuComplementOptionFromDataSourceToDomainMapper }