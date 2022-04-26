import { Component, OnInit } from '@angular/core';
import { Wine } from '../models/wine.model';
import { Food } from '../models/food.model';


@Component({
  selector: 'app-winelist',
  templateUrl: './winelist.component.html',
  styleUrls: ['./winelist.component.css']
})
export class WinelistComponent implements OnInit {

  food: Food = {
    name: '', 
    kcal: 0, 
    vegan: false,
    gluten: false,
  }

  wines: Array<Wine>;


  constructor() {
    this.wines = [
      new Wine(
      'LEGARIS MORADILLO DE ROA 2018',
      'https://www.vinoseleccion.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/l/e/legaris-moradillo-de-roa_2.jpg',
      95.40,
      false,
      0,
      this.food
      ),
      new Wine(
      'JEAN LEON 3055 PETIT VERDOT-MERLOT 2020',
      'https://www.vinoseleccion.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/j/e/jean-leon-3055_2018-merlot-petit--verdot_2.jpg',
      70.20,
      false,
      0,
      this.food
      ),
      new Wine(
      'JOSEPH DROUHIN LAFORÊT BOURGOGNE PINOT NOIR 2020',
      'https://www.vinoseleccion.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/j/o/joseph-drouhin-lafor_t-bourgogne-pinot-noir-sc_3_1.jpg',
      108.00,
      true,
      0,
      this.food
      ),
    ];
  }

  ngOnInit(): void {
  }

}
