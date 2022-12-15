
import { MenuModel } from "../../../menu/domain/entities/menu_models";
import {  AssociateModel} from "../entities/associate_models";
abstract class AssociateControllerAdapter{
    abstract getAssociates():Promise<Array<AssociateModel>>
    abstract getMenuListByIdAssociate(id: String): Promise<Array<MenuModel>>;
}

export default AssociateControllerAdapter