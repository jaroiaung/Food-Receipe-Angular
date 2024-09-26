import { Component , OnDestroy, OnInit} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subscription , Observable} from 'rxjs';
import { LoggingService } from '../logging.service';
import { Store } from '@ngrx/store';
import * as fromShoppingListActions from './store/shopping-list.actions';
import * as fromApp from '../store/app.reducer';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit , OnDestroy{
  ingredients : Observable<{ingredients: Ingredient[]}>;
  private subscription: Subscription;
  

  constructor(private loggingService: LoggingService, 
    private store: Store<fromApp.AppState>
  ){

  }

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList');
    this.store.select('shoppingList').subscribe();
    this.loggingService.printLog('Shopping list is loaded.');
    //this.ingredientsArr = this.shoppingListService.getIngredients();
    //this.igChangeSub = this.shoppingListService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => { this.ingredientsArr = ingredients});
  }

  ngOnDestroy(): void {
    
  }

  onEditItem(index: number){
    //this.shoppingListService.startedEditing.next(index);
    this.store.dispatch(new fromShoppingListActions.StartEdit(index));
  }



}
