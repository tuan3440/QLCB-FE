import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";


const routes: Routes = [
    {
      path: "",
      component: PagesComponent,
      children: [
        {
          path: "sys-config",
          loadChildren: () =>
            import("./sys-config/sys-config.module").then(
              (m) => m.SysConfigModule
            )
        }
      ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class PagesRoutingModule {
  }
  