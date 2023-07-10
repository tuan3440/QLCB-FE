import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
  component: LayoutComponent,
  children: [
    {
      path: "personal-information",
      loadChildren: () =>
        import("./personal-information/personal-information.module").then(
          (m) => m.PersonalInformationModule
        )
    },
    {
      path: "language",
      loadChildren: () =>
        import("./language/language.module").then(
          (m) => m.LanguageModule
        )
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
