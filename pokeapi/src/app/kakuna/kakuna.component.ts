import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kakuna',
  templateUrl: './kakuna.component.html',
  styleUrls: ['./kakuna.component.css']
})
export class KakunaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0)
  }

}
