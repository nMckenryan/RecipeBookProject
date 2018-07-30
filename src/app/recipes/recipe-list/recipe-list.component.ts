import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Generic Lentil Soup', 'A popular dish amongst Galley Slaves',
    'https://www.seriouseats.com/images/2014/10/20141013-easy-lentil-soup-recipe-04.jpg'),
    new Recipe('Recycled Meat', 'What? It was sitting on the side of the road! I wasn\'t just going to just leave it there.',
      'http://www.nhangle.com/storyimage/UL/20180314/AGGREGATION/180319581/AR/0/AR-180319581.jpg?q=72&stamp=&maxw=900'),
    new Recipe('Mother\'s casserole', 'Why God Why',
      'https://images-gmi-pmc.edge-generalmills.com/fe6e9467-247e-4b3d-9694-973a818eeab1.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
