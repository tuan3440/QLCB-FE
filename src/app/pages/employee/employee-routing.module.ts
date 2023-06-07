import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'personal/:id',
        loadChildren: './personal/personal.module#PersonalModule'
    },
    {
        path: 'update-employee',
        loadChildren: './update-employee/update-employee.module#UpdateEmployeeModule'
    },
    {
        path: 'create-employee',
        loadChildren: './create-employee/create-employee.module#CreateEmployeeModule'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
