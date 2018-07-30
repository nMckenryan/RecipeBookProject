import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients = [ // Initial array containing Example ingredients
    new Ingredients('Tomatoes', 2),
    new Ingredients('Mushrooms', 15)
  ];

  constructor() { }

  ngOnInit() {
  }

}
