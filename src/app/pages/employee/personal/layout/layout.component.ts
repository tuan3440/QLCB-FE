import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng-lts/api';
import { EmployeeService } from 'src/app/core/services';
import { EmployeeResolver } from 'src/app/core/services/employee.resolve';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  items: MenuItem[];
  employeeId:number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService,
    private employeeResoler: EmployeeResolver
  ) { 
    this.router.events.subscribe((e:any) => {
      if (e instanceof NavigationEnd) {
         this.employeeId = this.activatedRoute.snapshot.params.id;
         this.employeeResoler.resolveEmployeeId(this.employeeId);
      }
    })
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Thông tin cá nhân',
        routerLink: ['/pages/employee/personal', this.employeeId, 'personal-information'],
      },
      {
        label: 'Trình độ ngoại ngữ',
        routerLink: ['/pages/employee/personal', this.employeeId, 'language'],
      }
    ];
  }
}
