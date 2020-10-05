import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metapoid',
  templateUrl: './metapoid.component.html',
  styleUrls: ['./metapoid.component.css']
})
export class MetapoidComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0)
  }

}
