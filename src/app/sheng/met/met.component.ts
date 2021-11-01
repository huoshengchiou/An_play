import { Component, OnInit } from '@angular/core';

import { MetService } from '../services/met.service';
import { met,popMsg } from '../domain/met';

@Component({
  selector: 'app-met',
  templateUrl: './met.component.html',
  styleUrls: ['./met.component.scss'],
})
export class MetComponent implements OnInit {
  mets: met[] = [];
  first:number=0
  filterTt: string = '';
  dis_Dialog: boolean = false;
  dis_pop:boolean = false;
  loading: boolean = true;
  popMsg:popMsg|null=null

  constructor(private metService: MetService) {}

  ngOnInit(): void {
    this.loading = true;
    this.metService.getMets().subscribe((res) => {
      this.mets = res;
      this.loading = false;
    });
  }
  ngOnChanges(change: any) {
    console.log(change);
  }

  filterMets(): void {
    this.metService.filterMets(this.filterTt).subscribe((res) => {
      this.mets = res;
      this.reset()
    });
  }

  sortMets(sortKey: string): void {
    this.metService.sortMets(sortKey, this.filterTt).subscribe((res) => {
      this.mets = res;
    });
  }

  showDialog() {
    this.dis_Dialog = !this.dis_Dialog;
  }

  callPop(met:popMsg){
    this.popMsg=met
    this.dis_pop=true
  }

  reset(){
    this.first=0
  }

  // dynamicStyles() {
  //   return { color: 'red' };
  // }
}
