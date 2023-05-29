import {NgModule} from '@angular/core';

import {SysConfigRoutingModule} from './sys-config-routing.module';
import { CatComponent } from './cat/cat.component';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng-lts/button';
import {CardModule} from 'primeng-lts/card';
import {InputTextModule} from 'primeng-lts/inputtext';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SysConfigRoutingModule,
    TableModule,
    HttpClientModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    FormsModule
  ],
  declarations: [
    CatComponent
  ],
})
export class SysConfigModule {
}
