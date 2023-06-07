import {NgModule} from '@angular/core';

import {SysConfigRoutingModule} from './sys-config-routing.module';
import { CatComponent } from './cat/cat.component';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng-lts/button';
import {CardModule} from 'primeng-lts/card';
import {InputTextModule} from 'primeng-lts/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ConfirmationService, MessageService} from 'primeng-lts/api';
import {ConfirmDialogModule} from 'primeng-lts/confirmdialog';
import {ToastModule} from 'primeng-lts/toast';
import { CatUpdateComponent } from './cat/cat-update/cat-update.component';
import {DynamicDialogModule} from 'primeng-lts/dynamicdialog';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ItemComponent } from './cat-item/item/item.component';
import { CatItemListComponent } from './cat-item/cat-item-list.component';

@NgModule({
  imports: [
    SysConfigRoutingModule,
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
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    CatComponent,
    CatUpdateComponent,
    ItemComponent,
    CatItemListComponent
  ],
  entryComponents: [
    CatUpdateComponent,
    ItemComponent
  ],
  providers: [ConfirmationService, MessageService]
})
export class SysConfigModule {
}
