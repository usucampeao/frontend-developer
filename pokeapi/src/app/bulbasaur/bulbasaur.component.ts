import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulbasaur',
  templateUrl: './bulbasaur.component.html',
  styleUrls: ['./bulbasaur.component.css']
})
export class BulbasaurComponent implements OnInit {

  constructor() { }

  
  ngOnInit(): void {
    window.scroll(0,0)
  }

}
