import {UserModel} from '../users.model';
import {SupportModel} from '../supports.model';

export interface UserResModel {
    data: UserModel,
    support: SupportModel,
}