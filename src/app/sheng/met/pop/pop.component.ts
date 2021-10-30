import { Component, OnInit,Input } from '@angular/core';
import { popMsg } from '../../domain/met';

@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.scss']
})
export class PopComponent implements OnInit {
  @Input() popMsg!:any

  constructor() { }

  ngOnInit(): void {
  }



}
