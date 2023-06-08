import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateEmployeeRoutingModule } from './create-employee-routing.module';
import { CreateEmployeeComponent } from './create-employee.component';
import {PanelModule} from 'primeng-lts/panel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng-lts/inputtext';
import {CalendarModule} from 'primeng-lts/calendar';

@NgModule({
  declarations: [CreateEmployeeComponent],
  imports: [
    CommonModule,
    CreateEmployeeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PanelModule,
    InputTextModule,
    CalendarModule
  ]
})
export class CreateEmployeeModule { }
