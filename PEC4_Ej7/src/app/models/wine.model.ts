import { Food } from './food.model'

export class Wine {
    constructor(
    public name: string,
    public imageUrl: string,
    public price: number,
    public isOnSale: boolean,
    public quantityInCart: number,
    public foodPairing: Food
    ) {}
}

