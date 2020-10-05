import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charmeleon',
  templateUrl: './charmeleon.component.html',
  styleUrls: ['./charmeleon.component.css']
})
export class CharmeleonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0)
  }

}
