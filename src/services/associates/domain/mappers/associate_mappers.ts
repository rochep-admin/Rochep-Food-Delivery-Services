import { Mapper } from "../../../../utils/interfaces/mapper";
import { AssociateDataSourceModel, AssociateModel } from "../entities/associate_models";

export class AssociateMapperFromDataToDomain implements Mapper<AssociateDataSourceModel, AssociateModel> {
    map(input: AssociateDataSourceModel): AssociateModel {
        return {
            id: input.id,
            name: input.names,
            coverUrl: input.cover,
            rating: input.rating,
            numberOfRating: input.number_of_rating,
            timeOfService: input.time_of_service
        }
    }
}