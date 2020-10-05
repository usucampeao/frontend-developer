import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watortle',
  templateUrl: './watortle.component.html',
  styleUrls: ['./watortle.component.css']
})
export class WatortleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0)
  }

}
