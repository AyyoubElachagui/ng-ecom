import { TUserRes } from "./user-res.interface";

export interface TPaginationDataRes {
    id: number
    page: number,
    per_page: number,
    pagtotale: number,
    total_pages: number,
    data: TUserRes[]
}