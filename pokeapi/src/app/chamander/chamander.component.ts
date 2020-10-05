import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chamander',
  templateUrl: './chamander.component.html',
  styleUrls: ['./chamander.component.css']
})
export class ChamanderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0)
  }

}
