import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { LayoutComponent } from './layout/layout.component';
import {TabMenuModule} from 'primeng-lts/tabmenu';
import { EmployeeResolver } from 'src/app/core/services/employee.resolve';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    TabMenuModule
  ],
  providers: [EmployeeResolver]
})
export class PersonalModule { }
