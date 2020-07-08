import { Component, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'matinhu-pokedex';
  messages: any[] = [];
  subscription: Subscription;
  constructor(private pokemonService: PokemonService) {}

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.pokemonService.firstTime === true) {
        const toast = this.pokemonService.notifications.success(
          'Bem vindo(a) treinador(a), vamos inicializar pela primeira vez, pode levar um tempo, afinal, Nosso amigo Ash está até hoje tentando. Mas aqui somos bons treinadores, né!.',
          'Iniciado...',
          {
            timeOut: 0,
            showProgressBar: true,
            pauseOnHover: true,
            clickToClose: true,
          }
        );
        toast.click.subscribe((event) => {
          const toast2 = this.pokemonService.notifications.warn(
            'Demorando?',
            'Sem neura, depois de carregar, vai funcionar OFFLINE!',
            {
              timeOut: 0,
              showProgressBar: true,
              pauseOnHover: true,
              clickToClose: true,
            }
          );
          toast2.click.subscribe((event2) => {
            const toast3 = this.pokemonService.notifications.info(
              'Instale no seu dispositivo!',
              'Assim que as imagens forem carregadas pela primeira vez, estarão disponíveis offline!',
              {
                timeOut: 0,
                showProgressBar: true,
                pauseOnHover: true,
                clickToClose: true,
              }
            );
          });
        });
      } else {
        const toast = this.pokemonService.notifications.success(
          'Bem vindo(a) de volta treinador(a)! Vamos carregar os pokémons que já capturamos, e se estiver faltando algum, já sabe né? Gotta catch\'em All!.',
          'Carregando...',
          {
            timeOut: 0,
            showProgressBar: true,
            pauseOnHover: true,
            clickToClose: true,
          }
        );
      }
    }, 100);
  }
}
