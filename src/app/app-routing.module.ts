
import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";


const appRoutes: Routes = [
{path: '', component: AuthComponent},
{path: 'recipes', loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule)},
{path: 'shopping-list', loadChildren: () => import('./shopping-list/shopping.module').then(s => s.ShoppingModule)},
{path: 'auth', loadChildren: () => import('./auth/auth.module').then(a => a.AuthModule)}
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})

export class AppRoutingModule{

}