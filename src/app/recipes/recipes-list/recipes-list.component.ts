import { Component } from '@angular/core';
import { RecipesModel } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent {
  recipes: RecipesModel[] = [
    new RecipesModel('test', 'test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd4y7zVmHqMDDZPFYCAtIvlWWGYofVYEwNg4AyzbXsRg&s')
  ]
}
