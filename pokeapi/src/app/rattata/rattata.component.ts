import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rattata',
  templateUrl: './rattata.component.html',
  styleUrls: ['./rattata.component.css']
})
export class RattataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0)
  }

}
