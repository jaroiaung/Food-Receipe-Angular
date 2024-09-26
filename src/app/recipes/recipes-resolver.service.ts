
import { inject } from "@angular/core";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { DataStorageService } from "../shared/data-storage.service";


export const RecipeResolverService: ResolveFn<any> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ) => {
    const recipes = inject(RecipeService).getRecipes();

    if(recipes.length === 0){
        return inject(DataStorageService).fetchRecipes();
    }
    else
    {
        return recipes;
    }
    
  };
