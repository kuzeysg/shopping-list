import {EventEmitter, Injectable} from '@angular/core';

import {Recipe} from '../recipes/recipe.model';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe',
                'This is simple recipe',
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('Another Test Recipe',
                'This is simple recipe',
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg')
  ];

  constructor() { }

  getRecipes () {
    return this.recipes.slice();
  }
}
