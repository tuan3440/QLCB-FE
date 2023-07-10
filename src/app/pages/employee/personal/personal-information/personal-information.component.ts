import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng-lts/api';
import { EmployeeService } from 'src/app/core/services';
import { EmployeeResolver } from 'src/app/core/services/employee.resolve';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {

    formSave: FormGroup;
    genders: any[] = [{title: 'Nam', value: 1}, {title: 'Nữ', value: 0}];
    cities: any[] = [
      {name: 'Hà Nội', value: 1},
      {name: 'Hải Phòng', value: 2},
      {name: 'Hải Dương', value: 3}
    ]
    ALLOW_FILE_EXT = ['jpg', 'png', 'jpeg'];
    imgAsset: any;
    imgAssetRaw: any;
    employeeId: any;
    imgAssetDelete: any;
    constructor(
      private messageService: MessageService,
      private employeeService: EmployeeService,
      private employeeResolve: EmployeeResolver,
      private router: Router
    ) {
       this.initForm();
    }

    initForm() {
      this.formSave = new FormGroup({
        name: new FormControl(null, [Validators.required]),
        codeId: new FormControl(null, [
          Validators.required,
          Validators.pattern("^[0-9]*$")
        ]),
        birthDay: new FormControl(null),
        phone: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        gender: new FormControl(1, null),
        address: new FormControl(null),
        cityId: new FormControl(1, null),
        job: new FormControl(null),
        organization: new FormControl(null, [Validators.required])
      })
    }

    ngOnInit(): void {
      this.employeeResolve.EMPLOYEE_ID.subscribe(employeeId => {
        if(employeeId) {
          this.employeeId = employeeId;
          this.employeeService.findById(employeeId).subscribe(res => {
            console.log(res)
            this.formSave.patchValue({
              name: res.name,
              codeId: res.codeId,
              birthDay: new Date(res.birthDay),
              phone: res.phone,
              email: res.email,
              gender: res.gender,
              address: res.address,
              cityId: res.cityId,
              job: res.job,
              organization: res.organization,
            })
            this.imgAsset = {
              src : this.employeeService.createImageSrc('/file-managements/view?id=' + res.avatarId),
              url : this.employeeService.createImageSrc('/file-managements/download?id=' + res.avatarId),
              id : res.avatarId
            }
          })          
        }
       })
    }

    save() {
      this.formSave.markAllAsTouched();
      if (this.formSave.invalid) {
        return;
      }
      const formData = new FormData();
      if (this.imgAssetRaw) {
        formData.append("imgAsset", this.imgAssetRaw);
      }
      if (this.imgAssetDelete) {
        formData.append("imgAssetDel", JSON.stringify(this.imgAssetDelete));

      }
      const updateEmployee = {...this.formSave.value, id: this.employeeId}
      formData.append("employeeDTOString", JSON.stringify(updateEmployee));
      this.employeeService.update(formData).subscribe(res => {
        if (res) {
          this.messageService.add({severity:'info', summary:'Theem', detail:'Them moi thanh cong'})
        }
      }, err => {
        if (err.error.errorKey === 'codeIdexists') {
          this.messageService.add({severity:'error', summary:'Error', detail:'COdeId exist'});
        }
      })
    }

    cancel() {
        this.router.navigateByUrl('pages/employee/update-employee');
    }

    imgChange(event) {
      let file = event.target.files[0];
        if (this.checkValidImg(file)) {
          this.messageService.add({severity:'error', summary:'Error', detail:'Message Content'})
          return;
        }
        if (!this.checkValidCapacity(file, 5)) {
          this.messageService.add({severity:'error', summary:'Error', detail:'Message Content'})
          return;
        }
        const fr = new FileReader();
        fr.onload = evt => {
          const fileModel = new FileModel(evt.target?.result, file.name, file.type.substring(6, file.type.length));
          this.imgAsset = fileModel;
          this.imgAssetRaw = file;
        };
        fr.readAsDataURL(file);
      event.target.value = '';
    }

    checkValidImg(file: any) {
      for (let i = 0; i < this.ALLOW_FILE_EXT.length; i++) {
        if (file.type.includes(this.ALLOW_FILE_EXT[i])) {
          return false;
        }
      }
      return true;
    }

    checkValidCapacity(file: any, sz: any) {
      const fileCapacity = file.size / 1024 / 1024;
      if (!fileCapacity) {
        return false;
      }
      if (fileCapacity > sz) {
        return false;
      } else {
        return true;
      }
    }

    delImg(id) {
      this.imgAsset = null;
      this.imgAssetDelete = id;
    }

    @HostListener("dragover", ["$event"]) onDragOver(event: any) {
      event.preventDefault();
    }
  
    @HostListener("dragenter", ["$event"]) onDragEnter(event: any) {
      event.preventDefault();
    }
  
    @HostListener("dragend", ["$event"]) onDragEnd(event: any) {
      event.preventDefault();
    }
  
    @HostListener("dragleave", ["$event"]) onDragLeave(event: any) {
  
      event.preventDefault();
    }
  
    @HostListener("drop", ["$event"]) onDrop(event: any) {
      event.preventDefault();
      event.stopPropagation();
      if (event.dataTransfer.files) {
        const files: FileList = event.dataTransfer.files;
        this.saveFiles(files, event.target.id);
      }
    }

    saveFiles(files: FileList, elementID: string) {
        for (let i = 0; i < files.length; i++) {
            const fr = new FileReader();
            fr.onload = evt => {
              this.imgAsset= new FileModel(evt.target?.result, files[i].name, files[i].type.substring(6, files[i].type.length));
              this.imgAssetRaw = files[i];
            };
            fr.readAsDataURL(files[i]);
        }
    }
}

export class FileModel {
  constructor(public src: any, public name: string, public ext: string, public fileId: any = null, public url: any = null,
              public indexInRawArray?: number // index in imgAssetRaw, use when delete
  ) {
  }
}