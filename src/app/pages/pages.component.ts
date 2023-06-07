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
            icon: 'pi pi-cog',
            url: 'pages/sys-config/cat'
        },
        {
            label: 'Quản lí danh sách cc/cv',
            items: [
                {
                    label: 'Danh sách cc/cv',
                    icon: 'pi pi-book',
                    url: 'pages/employees'
                },
                {
                    label: 'Thêm mới cc/cv',
                    icon: 'pi pi-user-edit',
                    url: 'pages/employees/add'
                }
            ]
        }]
    }
  }