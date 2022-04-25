import { Food } from './food.model'

export interface Wine {
    name: string;
    imageUrl: string;
    price: number;
    isOnSale: boolean;
    quantityInCart: number;
    foodPairing: Food;
}

