import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ivysaur',
  templateUrl: './ivysaur.component.html',
  styleUrls: ['./ivysaur.component.css']
})
export class IvysaurComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0)
  }

}
