
import { MenuModel } from "../../../menu/domain/entities/menu_models";
import {  AssociateModel} from "../entities/associate_models";
abstract class AssociateRepositoryAdapter{
    abstract getAssociates():Promise<Array<AssociateModel>>
    abstract getMenuListFromAssociate(id: String): Promise<Array<MenuModel>>;
}

export default AssociateRepositoryAdapter