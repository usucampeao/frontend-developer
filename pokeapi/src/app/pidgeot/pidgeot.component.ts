import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pidgeot',
  templateUrl: './pidgeot.component.html',
  styleUrls: ['./pidgeot.component.css']
})
export class PidgeotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0)
  }

}
