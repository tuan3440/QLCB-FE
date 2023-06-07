import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng-lts/api';
import { DialogService } from 'primeng-lts/dynamicdialog';
import { SysCatItem } from 'src/app/core/models';
import { SysCatItemService, SysCatService } from 'src/app/core/services';
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-cat-item-list',
  templateUrl: './cat-item-list.component.html',
  providers: [DialogService]
})
export class CatItemListComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private sysCatItemService: SysCatItemService,
    private sysCatService: SysCatService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private dialogService: DialogService
  ) { }

  catItems: SysCatItem[];

  paramSearch = {
    catTypeId: null,
    code: null,
    name: null
  };
  
  catName: string = '';
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
        this.paramSearch.catTypeId = params["id"];
        this.search();
        this.getCat(params["id"]);
      });
  }

  search() {
    this.sysCatItemService.search({}, this.paramSearch
    ).subscribe(
      (res) => {
        this.catItems = res.body || []
      },
      (error) => {
      },
      () => {}
    );
  }

  getCat(catId) {
    this.sysCatService.getCat(catId
    ).subscribe(
      (res) => {
        this.catName = res.body.name || []
      },
      (error) => {
      },
      () => {}
    );
  }

  new() {
    const ref = this.dialogService.open(ItemComponent, {
      header: 'Thêm mới danh mục',
      data: {catTypeId: this.paramSearch.catTypeId},
      width: '70%'
    });
    ref.onClose.subscribe(data => {
      if (data.result && data.result === 'complete') {
        this.search();
      }
    })
  }

  edit(row) {
    const ref = this.dialogService.open(ItemComponent, {
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


  delete(id: number) {
    this.confirmationService.confirm({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
            this.sysCatItemService.deleteById(id).subscribe(res => {
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

}
