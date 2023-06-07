import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng-lts/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng-lts/dynamicdialog';
import { SysCatItem } from 'src/app/core/models';
import { SysCatItemService } from 'src/app/core/services';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {

  item: SysCatItem = {
    catId: null,
    code: null,
    name: null,
    catTypeId: null
  }
  constructor(
    public config: DynamicDialogConfig,
    private sysCatItemService: SysCatItemService,
    private messageService: MessageService,
    protected ref: DynamicDialogRef
  ) { }

  ngOnInit(): void {
    if(this.config.data) {
      this.item.catId = this.config.data.catId;
      this.item.code = this.config.data.code;
      this.item.name = this.config.data.name;
      this.item.catTypeId = this.config.data.catTypeId;
    } else {

    }
  }
  
  public cancel() {
    this.ref.close({result:'cancel'});
  }

  public save() {
    console.log(this.item)
    if (this.item.catId) {
      this.sysCatItemService.update(this.item).subscribe(res => {
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
      this.sysCatItemService.insert(this.item).subscribe(res => {
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
