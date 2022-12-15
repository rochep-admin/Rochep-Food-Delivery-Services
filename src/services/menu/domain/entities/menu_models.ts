import { type } from "os"
import { Field, ObjectType } from "type-graphql"


class IMenuTypeDataSourceModel {
    id: String
    name: String
    description: String
    cover: String
}
class IMenuModelDataSourceModel {
    id: String
    name: String
    description: String
    price: String
    menu_type: String
    cover: String
}


class IMenuComplementDataSourceModel {
    id: String
    name: String
    order_to_ask: number
    description: String
    is_required: boolean
    is_selectable: boolean
    max_selectable: number
}



export class IMenuComplementsOptionsDataSourceModel {
    id: String
    name: String
    order_to_ask: number
    description: String
    required: String
    is_chargable: boolean
    is_default: boolean
    price: number
    complement: String
}


@ObjectType({ description: "Object representing a menu type" })
class MenuTypeModel {
    @Field()
    id: String;

    @Field()
    name: String;

    @Field()
    description: String;

    @Field()
    coverUrl: String;
}

@ObjectType()
class MenuModel {
    @Field()
    id: String
    @Field()
    name: String
    @Field()
    description: String
    @Field()
    price: String
    @Field()
    menu_type: String
    @Field()
    coverUrl: String
    // @Field(type => [MenuComplementModel])
    complements?: Array<MenuComplementModel>
}

@ObjectType()
class MenuComplementModel {
    @Field()
    id: String
    @Field()
    name: String
    @Field()
    orderToAsk: number
    @Field()
    description: String
    @Field()
    required: boolean
    @Field()
    maxSelectable: number
    // @Field(type => [MenuComplementsOptionsModel])
    options?: Array<MenuComplementsOptionsModel>
}

@ObjectType()
export class MenuComplementsOptionsModel {
    @Field()
    id: String
    @Field()
    name: String
    @Field()
    orderToAsk: number
    @Field()
    description: String
    @Field()
    isChargable: boolean
    @Field()
    isDefault: boolean
    @Field()
    price: number
    @Field()
    complement?: String
    childComplement?: Array<MenuComplementModel>
}

export { MenuModel, IMenuModelDataSourceModel, MenuTypeModel, IMenuTypeDataSourceModel, IMenuComplementDataSourceModel, MenuComplementModel }