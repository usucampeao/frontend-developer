import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pokedex-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  theme: string = 'orange'
  constructor() { }

  ngOnInit(): void {
    let theme = localStorage.getItem('theme');
    theme ? this.theme = theme : false
  }

  setTheme(theme: string) {
    this.theme = theme;
    localStorage.setItem("theme", theme)
    location.reload();
  }
}
