import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateEmployeeRoutingModule } from './create-employee-routing.module';
import { CreateEmployeeComponent } from './create-employee.component';
import {PanelModule} from 'primeng-lts/panel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng-lts/inputtext';
import {CalendarModule} from 'primeng-lts/calendar';
import {RadioButtonModule} from 'primeng-lts/radiobutton';
import {DropdownModule} from 'primeng-lts/dropdown';
import {ButtonModule} from 'primeng-lts/button';
import {ConfirmationService, MessageService} from 'primeng-lts/api';
import {ToastModule} from 'primeng-lts/toast';

@NgModule({
  declarations: [CreateEmployeeComponent],
  imports: [
    CommonModule,
    CreateEmployeeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PanelModule,
    InputTextModule,
    CalendarModule,
    RadioButtonModule,
    DropdownModule,
    ButtonModule,
    ToastModule
  ],
  providers: [ConfirmationService, MessageService]
})
export class CreateEmployeeModule { }
