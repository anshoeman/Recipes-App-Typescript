import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Navigation } from './Navigation/Navigation.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { RecipeItemComponent } from './recipes-list/recipe-item/recipe-item.component';
@NgModule({
  declarations: [
    AppComponent,
    Navigation,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailsComponent,
    RecipeItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
