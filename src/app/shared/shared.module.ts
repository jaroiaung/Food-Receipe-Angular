import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { loadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { PlaceholderDirective } from "./placeholder/placeholder.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        AlertComponent,
        loadingSpinnerComponent,
        PlaceholderDirective,    
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AlertComponent,
        loadingSpinnerComponent,
        PlaceholderDirective,
        CommonModule
    ]
})
export class SharedModule{

}