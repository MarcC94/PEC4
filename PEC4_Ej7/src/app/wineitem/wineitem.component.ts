import { Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import { Food } from '../models/food.model';
import { Wine } from '../models/wine.model';

@Component({
  selector: 'app-wineitem',
  templateUrl: './wineitem.component.html',
  styleUrls: ['./wineitem.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class WineitemComponent implements OnInit {
  
  @Input() wine: Wine;
  @Input() posicion: number;

  list:number[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

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

