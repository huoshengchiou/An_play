import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import {DividerModule} from 'primeng/divider';



@NgModule({
  exports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    DialogModule,
    DividerModule,
  ]
})
export class SharePrimeModule { }
