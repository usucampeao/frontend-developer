import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venusaur',
  templateUrl: './venusaur.component.html',
  styleUrls: ['./venusaur.component.css']
})
export class VenusaurComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0)
  }

}
