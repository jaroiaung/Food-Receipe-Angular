import { Component, ViewChild, ElementRef, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromShoppingList from '../store/shopping-list.reducer';
import * as fromShoppingListActions from '../store/shopping-list.actions';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit, OnDestroy{
  @ViewChild('f') formShopping: NgForm;

  subscription : Subscription;
  editMode = false;
  editedItem: Ingredient;

  constructor( private store: Store<fromApp.AppState>){

  }

  ngOnInit(): void {
    this.subscription = this.store.select('shoppingList').subscribe(stateData => {
      if(stateData.editedIngredientIndex > -1){
        this.editMode = true;
        this.editedItem = stateData.editedIngredient;
        this.formShopping.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });

      }
      else{
        this.editMode = false;
      }
    });
    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.store.dispatch(new fromShoppingListActions.StopEdit());
  }

  onSubmitShoppingListItem(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);

    if (this.editMode){
      //this.slService.updateIngredient(this.editItemIndex, newIngredient);
      this.store.dispatch(new ShoppingListActions.UpdateIngredients(newIngredient));
    }
    else
    {
      //this.slService.addIngredient(newIngredient);
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    }

    this.editMode = false;
    form.reset();

  }

  onClear(){
    this.editMode = false;
    this.formShopping.reset();
    this.store.dispatch(new fromShoppingListActions.StopEdit());
  }

  onDelete(){
    //this.slService.deleteIngredient(this.editItemIndex);
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
    this.onClear();
  }

}
