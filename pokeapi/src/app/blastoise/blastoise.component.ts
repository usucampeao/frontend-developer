import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blastoise',
  templateUrl: './blastoise.component.html',
  styleUrls: ['./blastoise.component.css']
})
export class BlastoiseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0)
  }

}
