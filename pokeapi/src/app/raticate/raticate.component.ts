import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raticate',
  templateUrl: './raticate.component.html',
  styleUrls: ['./raticate.component.css']
})
export class RaticateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0)
  }

}
