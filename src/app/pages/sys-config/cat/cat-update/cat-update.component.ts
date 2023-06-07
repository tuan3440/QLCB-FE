import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng-lts/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng-lts/dynamicdialog';
import { SysCatService } from 'src/app/core/services';

@Component({
  selector: 'app-cat-update',
  templateUrl: './cat-update.component.html',
  styleUrls: ['./cat-update.component.css']
})
export class CatUpdateComponent implements OnInit {

  constructor(private fb: FormBuilder,
              protected ref: DynamicDialogRef,
              private sysCatService: SysCatService,
              private messageService: MessageService,
              public config: DynamicDialogConfig) { }
  
  configForm: FormGroup;
  id: FormControl;
  code: FormControl;
  name: FormControl;
  description: FormControl;

  // configForm: FormGroup = this.fb.group({
  //   id: [null],
  //   code: [null, Validators.required],
  //   name: [null, Validators.required],
  //   description: [null, Validators.maxLength(100)]
  // });
  
  ngOnInit(): void {
    this.id = new FormControl(null);
    this.code = new FormControl(null, Validators.required);
    this.name = new FormControl(null, Validators.required);
    this.description = new FormControl(null, Validators.maxLength(100));
    this.configForm = new FormGroup({
      id: this.id,
      name: this.name,
      code: this.code,
      description: this.description
    });
    if(this.config.data) {
      this.configForm.patchValue(this.config.data);
    }
  }

  public cancel() {
    this.ref.close({result:'cancel'});
  }

  public save() {
    console.log('aa', this.configForm)
    const cat = Object.assign({}, this.configForm.value);
    if (cat.id) {
      this.sysCatService.update(cat).subscribe(res => {
        this.messageService.add({severity:'info', summary:'Edit', detail:'Edit thanh cong'});
        this.ref.close({result:'complete'});
      }, err => {
        console.log('aa', err)
        if (err.error.errorKey === 'codeexists') {
          this.messageService.add({severity:'error', summary:'Error', detail:'COde exist'});
          this.ref.close({result:'complete'});
        }
      })
    } else {
      this.sysCatService.insert(cat).subscribe(res => {
        this.messageService.add({severity:'info', summary:'Add', detail:'add thanh cong'});
        this.ref.close({result:'complete'});
      }, err => {
        if (err.error.errorKey === 'codeexists') {
          this.messageService.add({severity:'error', summary:'Error', detail:'COde exist'});
          this.ref.close({result:'complete'});
        }
      })
    }
  }

}
