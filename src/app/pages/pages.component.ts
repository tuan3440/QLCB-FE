import { Component } from "@angular/core";
import {MenuItem} from 'primeng-lts/api';

@Component({
    selector: "app-pages",
    styleUrls: ["pages.component.scss"],
    templateUrl: "./pages.component.html"
  })
  export class PagesComponent {
    items: MenuItem[];

    ngOnInit() {
        this.items = [{
            label: 'Cấu hình hệ thống',
            items: [
                {label: 'Danh mục dữ liệu', url: 'pages/sys-config/cat'}
            ]
        }]
    }
  }