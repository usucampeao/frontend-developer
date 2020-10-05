import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beedril',
  templateUrl: './beedril.component.html',
  styleUrls: ['./beedril.component.css']
})
export class BeedrilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0)
  }

}
