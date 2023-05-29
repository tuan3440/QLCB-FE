import { Component, OnInit } from '@angular/core';
import { SysCatBean} from '../../../core/models';
import { SysCatService } from 'src/app/core/services';
import { HttpHeaders } from '@angular/common/http';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  constructor(private sysCatService: SysCatService) { }

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
        console.log(this.cats)
      },
      (error) => {
      },
      () => {}
    );
  }
}
