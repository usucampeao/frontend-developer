import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weedle',
  templateUrl: './weedle.component.html',
  styleUrls: ['./weedle.component.css']
})
export class WeedleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0)
  }

}
