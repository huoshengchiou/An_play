import { Component, OnInit } from '@angular/core';

import { MetService } from '../services/met.service';
import { met } from '../domain/met';

@Component({
  selector: 'app-met',
  templateUrl: './met.component.html',
  styleUrls: ['./met.component.scss'],
})
export class MetComponent implements OnInit {
  mets: met[] = [];
  filterTt: string = '';
  dis_Dialog: boolean = false;
  loading: boolean = true;

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
}
