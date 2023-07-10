import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateEmployeeRoutingModule } from './update-employee-routing.module';
import { UpdateEmployeeComponent } from './update-employee.component';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng-lts/button';
import {CardModule} from 'primeng-lts/card';
import {InputTextModule} from 'primeng-lts/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ConfirmationService, MessageService} from 'primeng-lts/api';
import {ConfirmDialogModule} from 'primeng-lts/confirmdialog';
import {ToastModule} from 'primeng-lts/toast';
import {DynamicDialogModule} from 'primeng-lts/dynamicdialog';
import { CalendarModule } from 'primeng-lts/calendar';
import { RadioButtonModule } from 'primeng-lts/radiobutton';

@NgModule({
  declarations: [UpdateEmployeeComponent],
  imports: [
    CommonModule,
    UpdateEmployeeRoutingModule,
    TableModule,
    HttpClientModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    FormsModule,
    ToastModule,
    ConfirmDialogModule,
    DynamicDialogModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    RadioButtonModule
  ],
  providers: [ConfirmationService, MessageService]
})
export class UpdateEmployeeModule { }
