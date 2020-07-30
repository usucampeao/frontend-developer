import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pokedex-main',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  theme: string = 'orange'
  constructor() { }

  ngOnInit(): void {
    let theme = localStorage.getItem('theme');
    theme ? this.theme = theme : false
  }

  setTheme(theme: string) {
    this.theme = theme;
    localStorage.setItem("theme", theme)
  }
}
