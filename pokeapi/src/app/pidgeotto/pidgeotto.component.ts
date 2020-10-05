import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pidgeotto',
  templateUrl: './pidgeotto.component.html',
  styleUrls: ['./pidgeotto.component.css']
})
export class PidgeottoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0)
  }

}
