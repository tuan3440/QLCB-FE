import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MessageService } from 'primeng-lts/api';
import { EmployeeService, FileAttachmentService } from 'src/app/core/services';
import { ValidationService } from 'src/app/shared/validator';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  formSearch: FormGroup;
  employees:[];
  genders: any[] = [{title: 'Nam', value: 1}, {title: 'Nữ', value: 0}];
  imgAsset: [];
  errDateBirthFrom = false;
  errDateBirthTo = false;
  employeeId: any;
  constructor(private employeeService: EmployeeService,
              private fileAttachment: FileAttachmentService,
              private messageService: MessageService,
              private router: Router
              )
               { 
                  
               }

  ngOnInit(): void {
    this.formSearch = new FormGroup({
      name: new FormControl(null),
      codeId: new FormControl(null, [
        Validators.pattern("^[0-9]*$"),
      ]),
      email: new FormControl(null),
      dateBirthFrom: new FormControl(null),
      dateBirthTo: new FormControl(null),
      phone: new FormControl(null),
      gender: new FormControl(null)
    })
    this.fileAttachment.search({
      fileType: 1
    })
    this.search();
  }

  checkValidate(target)
  {
    if (this.formSearch.controls['dateBirthFrom'].value && this.formSearch.controls['dateBirthTo'].value) {
       if (this.formSearch.controls['dateBirthFrom'].value < this.formSearch.controls['dateBirthTo'].value) {
        this.errDateBirthFrom = false;
        this.errDateBirthTo = false;
       } 

       if (this.formSearch.controls['dateBirthFrom'].value > this.formSearch.controls['dateBirthTo'].value) {
         if (target == 'dateBirthFrom') {
          this.errDateBirthFrom = true;
          this.errDateBirthTo = false;
         } else {
          this.errDateBirthFrom = false;
          this.errDateBirthTo = true;
         }
       }
    }
  }

  search() {
    this.employeeService.search(this.formSearch.value).subscribe(res => {
      this.employees = res.body;
    })
  }

  edit(id) {
    this.router.navigate(["pages/employee/personal/"+ id + "/personal-information" ]);
  }

  delete(id) {
    this.employeeService.delete(id).subscribe(res => {
      this.messageService.add({severity:'info', summary:'Xoa', detail:'Xoa thanh cong'});
      this.search()
    }, err => {
      this.messageService.add({severity:'error', summary:'Xoa', detail:'Xoa ko thanh cong'})
    })
  }
  

}
