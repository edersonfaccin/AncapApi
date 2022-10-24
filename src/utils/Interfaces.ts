import { ECoin, EServiceType } from "./Enums"

export interface ICoin {
    coin: ECoin
    public_key: string
}

export interface IServiceType {
    service: EServiceType,
    note?: string
}
