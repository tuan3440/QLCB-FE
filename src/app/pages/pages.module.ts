import { NgModule } from "@angular/core";
import { PagesComponent } from "./pages.component";
import { PagesRoutingModule } from "./pages-routing.module";
import {PanelMenuModule} from 'primeng-lts/panelmenu';
import { SysConfigComponent } from './sys-config/sys-config.component';
import { CommonModule } from "@angular/common";
@NgModule({
    imports: [
        PagesRoutingModule,
        PanelMenuModule,
        CommonModule
    ],
    declarations: [
        PagesComponent,
        SysConfigComponent
    ],
    entryComponents: [
      
    ]
  })
  export class PagesModule {
  }