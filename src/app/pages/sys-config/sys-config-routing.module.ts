import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CatComponent } from "./cat/cat.component";
import { CatItemListComponent } from "./cat-item/cat-item-list.component";


const routes: Routes = [{
    path: '',
    children: [
      {
        path: 'cat',
        component: CatComponent,
      },
      {
        path: 'cat-items/:id',
        component: CatItemListComponent
      }
    ]
}];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class SysConfigRoutingModule {
  }