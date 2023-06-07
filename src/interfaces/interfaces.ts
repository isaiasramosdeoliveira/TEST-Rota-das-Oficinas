export interface IProduct {
    name: string,
    value: number
}

export interface IPay {
    name: string
    product: IProduct
    total?: IProduct[]
}