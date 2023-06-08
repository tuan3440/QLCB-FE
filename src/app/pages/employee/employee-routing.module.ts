import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'personal/:id',
        loadChildren: () => 
            import("./personal/personal.module").then(
                (m) => m.PersonalModule
            )
        // loadChildren: './personal/personal.module#PersonalModule'
    },
    {
        path: 'update-employee',
        loadChildren: () => 
            import("./update-employee/update-employee.module").then(
                (m) => m.UpdateEmployeeModule
            )
        // loadChildren: './update-employee/update-employee.module#UpdateEmployeeModule'
    },
    {
        path: 'create-employee',
        loadChildren: () => 
            import("./create-employee/create-employee.module").then(
                (m) => m.CreateEmployeeModule
            )
        // loadChildren: './create-employee/create-employee.module#CreateEmployeeModule'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
