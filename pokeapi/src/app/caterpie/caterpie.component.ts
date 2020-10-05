import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caterpie',
  templateUrl: './caterpie.component.html',
  styleUrls: ['./caterpie.component.css']
})
export class CaterpieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0)
  }

}
