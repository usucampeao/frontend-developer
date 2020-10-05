import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-butterfree',
  templateUrl: './butterfree.component.html',
  styleUrls: ['./butterfree.component.css']
})
export class ButterfreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0)
  }

}
