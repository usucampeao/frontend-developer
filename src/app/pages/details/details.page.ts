import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss']
})
export class DetailsPage implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /**
     * Ao entrar na pagina pegar o id e então pegar o pokemon no localstorage
     * mais fácil. Não precisa trafegar todos os dados, talvez, sei la, o que for melhor
     *
     */
  }

}
