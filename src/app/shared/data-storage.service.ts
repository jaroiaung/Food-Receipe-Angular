import { Injectable, inject } from "@angular/core";
import { HttpClient, HttpParams} from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { exhaustMap, map,take,tap } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Injectable({providedIn: 'root'})
export class DataStorageService{
    constructor(private http: HttpClient, private recipesService: RecipeService, private authSerivce: AuthService){

    }

    storeRecipes(){
        const recipes = this.recipesService.getRecipes();
        this.http.put('https://angularapp-f6925-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json', recipes).subscribe( response => {
            console.log(response);
        });
    }

    fetchRecipes(){

     return this.http.get<Recipe[]>(
            'https://angularapp-f6925-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json'
          ).pipe(map(recipes => {
            return recipes.map(recipe => {
              return {
                ...recipe,
                ingredients: recipe.ingredients ? recipe.ingredients : []
              };
            });
          }),
            tap(recipes => {
              this.recipesService.setRecipes(recipes);
            })
          );

    }

}


