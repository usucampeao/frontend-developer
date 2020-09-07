import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokedex-item',
  templateUrl: './pokedex-item.component.html',
  styleUrls: ['./pokedex-item.component.scss']
})
export class PokedexItemComponent implements OnInit {

  @Input() url: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
