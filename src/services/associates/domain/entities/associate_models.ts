import { Field, ObjectType } from "type-graphql"
import { MenuModel } from "../../../menu/domain/entities/menu_models"

@ObjectType()
class AssociateModel{
    @Field()
    id: String
    @Field()
    name: String
    @Field()
    coverUrl: String
    @Field()
    rating: Number
    @Field()
    numberOfRating: Number
    @Field()
    timeOfService: String
    menu?:Array<MenuModel>
}

class AssociateDataSourceModel {
    id: String
    names: String
    cover: String
    rating: Number
    number_of_rating: Number
    time_of_service: String
}



export {AssociateModel,AssociateDataSourceModel};