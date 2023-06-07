import { Component, OnInit } from '@angular/core';
import { SysCatBean} from '../../../core/models';
import { SysCatService } from 'src/app/core/services';
import { HttpHeaders } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {ConfirmationService, ConfirmEventType, MessageService} from 'primeng-lts/api';
import {ConfirmDialogModule} from 'primeng-lts/confirmdialog';
import {ToastModule} from 'primeng-lts/toast';
import {DialogService, DynamicDialogRef} from 'primeng-lts/dynamicdialog';
import { CatUpdateComponent } from './cat-update/cat-update.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css'],
  providers: [DialogService]
})
export class CatComponent implements OnInit {

  constructor(private sysCatService: SysCatService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService,
              public dialogService: DialogService,
              private router: Router
              ) { }
  cats: SysCatBean[];
  paramSearch = {
    code: null,
    name: null
  };

  ngOnInit(): void {
    this.search();
  }

  search() {
    this.sysCatService.search(this.paramSearch
    ).subscribe(
      (res) => {
        this.cats = res.body || []
      },
      (error) => {
      },
      () => {}
    );
  }

  delete(id: number) {
    this.confirmationService.confirm({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
            this.sysCatService.deleteById(id).subscribe(res => {
              this.messageService.add({severity:'info', summary:'Confirmed', detail:'Record deleted'});
              this.search();
            }, (err) => {
              this.messageService.add({severity:'error', summary:'Confirmed', detail:'Error'});
            })
        },
        reject: (type) => {
            switch(type) {
                case ConfirmEventType.REJECT:
                    this.messageService.add({severity:'error', summary:'Rejected', detail:'You have rejected'});
                break;
                case ConfirmEventType.CANCEL:
                    this.messageService.add({severity:'warn', summary:'Cancelled', detail:'You have cancelled'});
                break;
            }
        }
    });
  }

  new() {
    const ref = this.dialogService.open(CatUpdateComponent, {
      header: 'Thêm mới danh mục',
      width: '70%'
    });
    ref.onClose.subscribe(data => {
      if (data.result && data.result === 'complete') {
        this.search();
      }
    })
  }

  edit(row) {
    const ref = this.dialogService.open(CatUpdateComponent, {
      header: 'Sửa danh mục',
      data: row,
      width: '70%'
    });
    ref.onClose.subscribe(data => {
      if (data.result && data.result === 'complete') {
        this.search();
      }
    })
  }

  view(id: number) {
    this.router.navigateByUrl("pages/sys-config/cat-items/"+id);
  }
}
