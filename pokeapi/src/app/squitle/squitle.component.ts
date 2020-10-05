import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-squitle',
  templateUrl: './squitle.component.html',
  styleUrls: ['./squitle.component.css']
})
export class SquitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0)
  }

}
