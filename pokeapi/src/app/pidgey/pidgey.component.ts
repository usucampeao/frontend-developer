import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pidgey',
  templateUrl: './pidgey.component.html',
  styleUrls: ['./pidgey.component.css']
})
export class PidgeyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0)
  }

}
