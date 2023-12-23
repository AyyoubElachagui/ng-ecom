import {TUser} from '../users.interface';
import {TSupport} from '../supports.interface';

export interface TUserRes {
    id: number,
    data: TUser,
    support: TSupport,
}