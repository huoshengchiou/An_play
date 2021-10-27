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
  constructor(private metService: MetService) {}
  ngOnInit(): void {
    this.metService.getMets().subscribe((res) => {
      this.mets = res;
    });
  }
  ngOnChanges(change: any) {
    console.log(change);
  }

  filterMets(): void {
    // this.mets = this.mets.filter((met) => met.id === 1);
    //     console.log(this.filterTt);
    this.metService.filterMets(this.filterTt).subscribe((res) => {
      this.mets = res;
    });
  }

  handleFilter(event: any) {
    console.log(event);
  }
}
