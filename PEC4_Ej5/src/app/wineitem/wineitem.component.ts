import { Component, OnInit, Input } from '@angular/core';
import { Food } from '../models/food.model';
import { Wine } from '../models/wine.model';

@Component({
  selector: 'app-wineitem',
  templateUrl: './wineitem.component.html',
  styleUrls: ['./wineitem.component.css']
})
export class WineitemComponent implements OnInit {
  
  food: Food = {
    name: '', 
    kcal: 0, 
    vegan: false,
    gluten: false,
  }

  wine: Wine = {
    name: 'L´ERMITA 2017, Un Priorato de culto', 
    imageUrl: 'https://www.vinoseleccion.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/l/alvaro-palacios-l_ermita_1_1.png', 
    price: 1110.00,
    isOnSale: false,
    quantityInCart: 0,
    foodPairing: this.food,
  };

  constructor() {}

  increaseAmount(){
      this.wine.quantityInCart += 1;
    }

    decreaseAmount(){
      this.wine.quantityInCart -= 1;
    }

    ngOnInit(): void {

    }

}

