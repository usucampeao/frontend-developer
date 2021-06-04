import { Component } from '@angular/core';
import { VERSION } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  name = 'Angular' + VERSION.major;
  title = 'TPokemon';
  showFiller = false

}
