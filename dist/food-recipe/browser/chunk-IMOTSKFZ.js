import{a as v,b as Z}from"./chunk-3PGHUWKQ.js";import{c as de}from"./chunk-5JPRDBNC.js";import{a as V}from"./chunk-GP3FLTEX.js";import{$ as W,A as r,B as s,C as L,D as f,E as y,F as N,J as H,K as c,L as D,M as T,O as J,P as w,Q as K,Y as I,Z as Q,_ as x,aa as Y,ca as k,ea as ee,f as $,fa as g,ga as te,h as z,ha as ie,ia as P,ka as S,l as A,ma as ne,n as C,na as re,o as B,oa as oe,p as u,pa as pe,q as O,qa as ce,r as F,ra as me,s as M,t as b,v as a,w as l,wa as ae,x as _,y as d,ya as se,z as o}from"./chunk-WB7VSCDF.js";var Ce=t=>[t],le=(()=>{let e=class e{constructor(n){this.recipeService=n}};e.\u0275fac=function(i){return new(i||e)(l(v))},e.\u0275cmp=u({type:e,selectors:[["app-recipe-item"]],inputs:{recipeItem:[B.None,"recipe","recipeItem"],index:"index"},decls:8,vars:7,consts:[["routerLinkActive","active",1,"list-group-item","clearfix",2,"cursor","pointer",3,"routerLink"],[1,"pull-left"],[1,"list-group-item-heading"],[1,"list-group-item-text"],[1,"pull-right"],[1,"img-responsive",2,"max-height","50px",3,"src","alt"]],template:function(i,p){i&1&&(o(0,"a",0)(1,"div",1)(2,"h4",2),c(3),r(),o(4,"p",3),c(5),r()(),o(6,"span",4),s(7,"img",5),r()()),i&2&&(d("routerLink",J(5,Ce,p.index)),a(3),T(" ",p.recipeItem.name,""),a(2),D(p.recipeItem.description),a(2),N("src",p.recipeItem.imagePath,b),N("alt",p.recipeItem.name))},dependencies:[W,Y]});let t=e;return t})();function Re(t,e){if(t&1&&(o(0,"div",4),s(1,"app-recipe-item",5),r()),t&2){let m=e.$implicit,n=e.index;a(),d("recipe",m)("index",n)}}var fe=(()=>{let e=class e{constructor(n,i,p){this.recipeService=n,this.router=i,this.route=p}ngOnInit(){this.subscription=this.recipeService.recipesChanged.subscribe(n=>{this.recipes=n}),this.recipes=this.recipeService.getRecipes()}onNewRecipe(){this.router.navigate(["new"],{relativeTo:this.route})}ngOnDestroy(){this.subscription.unsubscribe()}};e.\u0275fac=function(i){return new(i||e)(l(v),l(x),l(I))},e.\u0275cmp=u({type:e,selectors:[["app-recipe-list"]],decls:6,vars:1,consts:[[1,"row","paddingSmall"],[1,"col-xs-12"],[1,"btn","btn-sucess",3,"click"],["class","col-xs-12 paddingXS",4,"ngFor","ngForOf"],[1,"col-xs-12","paddingXS"],[3,"recipe","index"]],template:function(i,p){i&1&&(o(0,"div",0)(1,"div",1)(2,"button",2),f("click",function(){return p.onNewRecipe()}),c(3,"New Recipe"),r()()(),o(4,"div",0),_(5,Re,2,2,"div",3),r()),i&2&&(a(5),d("ngForOf",p.recipes))},dependencies:[w,le],styles:[".paddingSmall[_ngcontent-%COMP%]{padding:6px}.paddingXS[_ngcontent-%COMP%]{padding:2px}"]});let t=e;return t})();var ve=(()=>{let e=class e{constructor(){}ngOnInit(){}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=u({type:e,selectors:[["app-recipes"]],decls:5,vars:0,consts:[[1,"row"],[1,"col-md-5"],[1,"col-md-7"]],template:function(i,p){i&1&&(o(0,"div",0)(1,"div",1),s(2,"app-recipe-list"),r(),o(3,"div",2),s(4,"router-outlet"),r()())},dependencies:[Q,fe]});let t=e;return t})();function ye(t,e){if(t&1&&(o(0,"li",10)(1,"span",11),c(2),r(),c(3),r()),t&2){let m=e.$implicit;a(2),D(m.amount),a(),T(" ",m.name," ")}}var ge=(()=>{let e=class e{constructor(n,i,p){this.recipeService=n,this.route=i,this.router=p}ngOnInit(){this.route.params.subscribe(n=>{this.id=+n.id,this.recipe=this.recipeService.getRecipe(this.id)})}onAddToShoppingList(){this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)}onEditRecipe(){this.router.navigate(["../","edit",this.id],{relativeTo:this.route}),console.log("on edit"+this.id)}onDeleteRecipe(){this.recipeService.deleteRecipe(this.id),this.router.navigate(["/recipes"])}};e.\u0275fac=function(i){return new(i||e)(l(v),l(I),l(x))},e.\u0275cmp=u({type:e,selectors:[["app-recipe-detail"]],decls:30,vars:5,consts:[[1,"row"],[1,"col-xs-12"],[1,"img-responsive",2,"max-height","300px",3,"src","alt"],[1,"dropdown"],["type","button","id","dropdownMenu1","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"btn","btn-default","dropdown-toggle"],[1,"caret"],["aria-labelledby","dropdownMenu1",1,"dropdown-menu"],[2,"cursor","pointer",3,"click"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"],[1,"badge"]],template:function(i,p){i&1&&(o(0,"div",0)(1,"div",1),s(2,"img",2),r()(),o(3,"div",0)(4,"div",1)(5,"h3"),c(6),r()()(),o(7,"div",0)(8,"div",1)(9,"div",3)(10,"button",4),c(11," Manage Recipe "),s(12,"span",5),r(),o(13,"ul",6)(14,"li")(15,"a",7),f("click",function(){return p.onAddToShoppingList()}),c(16,"To Shopping List"),r()(),o(17,"li")(18,"a",7),f("click",function(){return p.onEditRecipe()}),c(19,"Edit Recipe"),r()(),o(20,"li")(21,"a",7),f("click",function(){return p.onDeleteRecipe()}),c(22,"Delete Recipe"),r()()()()()(),o(23,"div",0)(24,"div",1),c(25),r()(),o(26,"div",0)(27,"div",1)(28,"ul",8),_(29,ye,4,2,"li",9),r()()()),i&2&&(a(2),N("alt",p.recipe.name),d("src",p.recipe.imagePath,b),a(4),D(p.recipe.name),a(19),T(" ",p.recipe.description," "),a(4),d("ngForOf",p.recipe.ingredients))},dependencies:[w]});let t=e;return t})();var he=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=u({type:e,selectors:[["app-recipe-start"]],decls:2,vars:0,template:function(i,p){i&1&&(o(0,"h3"),c(1,"Please select a recipe."),r())}});let t=e;return t})();function we(t,e){if(t&1){let m=L();o(0,"div",18)(1,"div",19),s(2,"input",20),r(),o(3,"div",21),s(4,"input",22),r(),o(5,"div",21)(6,"button",23),f("click",function(){let p=F(m).index,h=y(2);return M(h.onDeleteIngredient(p))}),c(7,"X"),r()()()}if(t&2){let m=e.index;d("formGroupName",m)}}function Ie(t,e){if(t&1){let m=L();o(0,"form",3),f("ngSubmit",function(){F(m);let i=y();return M(i.onSubmit())}),o(1,"div",0)(2,"div",1)(3,"button",4),c(4,"Save"),r(),o(5,"button",5),f("click",function(){F(m);let i=y();return M(i.onCancel())}),c(6,"Cancel"),r()()(),o(7,"div",0)(8,"div",1)(9,"div",6)(10,"label",7),c(11,"Name"),r(),s(12,"input",8),r()()(),o(13,"div",0)(14,"div",1)(15,"div",6)(16,"label",9),c(17,"Image URL"),r(),s(18,"input",10,11),r()()(),o(20,"div",0)(21,"div",1),s(22,"img",12),r()(),o(23,"div",0)(24,"div",1)(25,"div",6)(26,"label",13),c(27,"Description"),r(),s(28,"textarea",14),r()()(),o(29,"div",0)(30,"div",15),_(31,we,8,1,"div",16),s(32,"hr"),o(33,"div",0)(34,"div",1)(35,"button",17),f("click",function(){F(m);let i=y();return M(i.onAddIngredient())}),c(36,"Add Ingredient"),r()()()()()()}if(t&2){let m=H(19),n=y();d("formGroup",n.recipeForm),a(3),d("disabled",!n.recipeForm.valid),a(19),d("src",m.value,b),a(9),d("ngForOf",n.controls)}}var q=(()=>{let e=class e{constructor(n,i,p){this.recipeService=n,this.route=i,this.router=p,this.editMode=!1}ngOnInit(){this.route.params.subscribe(n=>{this.id=+n.id,this.editMode=n.id!=null,this.initForm()})}onSubmit(){this.editMode?this.recipeService.updateRecipe(this.id,this.recipeForm.value):this.recipeService.addRecipe(this.recipeForm.value),this.onCancel()}onCancel(){this.router.navigate(["../"],{relativeTo:this.route})}initForm(){let n="",i="",p="",h=new ae([]);if(this.editMode){var E=this.recipeService.getRecipe(this.id);if(n=E.name,i=E.imagePath,p=E.description,E.ingredients)for(let U of E.ingredients)h.push(new P({name:new S(U.name,g.required),amount:new S(U.amount,[g.required,g.pattern(/^[1-9]+[0-9]*$/)])}))}this.recipeForm=new P({name:new S(n,g.required),imagePath:new S(i,g.required),description:new S(p,g.required),ingredients:h})}onAddIngredient(){this.recipeForm.get("ingredients").push(new P({name:new S(null,g.required),amount:new S(null,[g.required,g.pattern(/^[1-9]+[0-9]*$/)])}))}onDeleteIngredient(n){this.recipeForm.get("ingredients").removeAt(n)}get controls(){return this.recipeForm.get("ingredients").controls}};e.\u0275fac=function(i){return new(i||e)(l(v),l(I),l(x))},e.\u0275cmp=u({type:e,selectors:[["app-recipe-edit"]],decls:3,vars:1,consts:[[1,"row"],[1,"col-xs-12"],[3,"formGroup","ngSubmit",4,"ngIf"],[3,"formGroup","ngSubmit"],["type","submit",1,"btn","btn-success","marginXS",3,"disabled"],["type","button",1,"btn","btn-danger","marginXS",3,"click"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control"],["for","imagePath"],["type","text","id","imagePath","formControlName","imagePath",1,"form-control"],["imagePath",""],[1,"img-responsive",3,"src"],["for","description"],["type","text","id","description","formControlName","description","rows","6",1,"form-control"],["formArrayName","ingredients",1,"col-xs-12"],["class","row","style","margin-top: 10px;",3,"formGroupName",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-success",3,"click"],[1,"row",2,"margin-top","10px",3,"formGroupName"],[1,"col-xs-8"],["type","text","formControlName","name",1,"form-control"],[1,"col-xs-2"],["type","number","formControlName","amount",1,"form-control"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(i,p){i&1&&(o(0,"div",0)(1,"div",1),_(2,Ie,37,4,"form",2),r()()),i&2&&(a(2),d("ngIf",p.recipeForm))},dependencies:[ne,ee,re,te,ie,oe,me,pe,ce,w,K],styles:[".marginXS[_ngcontent-%COMP%]{margin:2px}.paddingTB[_ngcontent-%COMP%]{padding-top:3px;padding-bottom:3px}input.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}.img-responsive[_ngcontent-%COMP%]{max-width:300px;max-height:300px}"]});let t=e;return t})();var Ee=()=>{let t=C(V),e=C(x);return C(V).user.pipe(z(1),$(m=>m?(console.log("routertrue"),!0):(e.navigate(["/"]),!1)))},xe=Ee;var X=(t,e)=>{let m=C(v).getRecipes();return m.length===0?C(Z).fetchRecipes():m};var Fe=[{path:"",component:ve,canActivate:[xe],children:[{path:"",component:he},{path:"new",component:q},{path:":id",component:ge,resolve:X},{path:"edit/:id",component:q,resolve:X}]}],Se=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=O({type:e}),e.\u0275inj=A({imports:[k.forChild(Fe),k]});let t=e;return t})();var ft=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=O({type:e}),e.\u0275inj=A({imports:[k,se,Se,de]});let t=e;return t})();export{ft as RecipesModule};
