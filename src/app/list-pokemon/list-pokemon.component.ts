import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pokeApiService } from '../services/api-pokeapi.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {
  
  objAllPokemons: any;
  objPages: any;
  hoverPokemon: any = {hover: false};

  constructor(public router: Router,
    private pokeapiservice: pokeApiService) { }

  async ngOnInit() {
    this.objAllPokemons = [];
    this.alertLoading("Buscando Pokémons","Aguarde um momento");
    await this.getAllPokemonsApi();
    await this.getAllInfo();
    Swal.close();
  }

  async getAllPokemonsApi(){
    const response: any = await this.pokeapiservice.listAllPokemons().toPromise();
    if (response && response.error) {
      this.alertError();
    } else {
      this.objPages = response;
      this.objAllPokemons = response.results;
    }
  }

  async getAllInfo(){
    for(let i=0; i < this.objAllPokemons.length;i++){
      this.pokeapiservice.searchPokemon(this.objAllPokemons[i].url).subscribe(
        async (response)=>{
          await Object.assign(this.objAllPokemons[i], response);
          await Object.assign(this.objAllPokemons[i], this.hoverPokemon);
      }, (error) => 
          console.log(error)
      );
    }
  }

  onClickLoadMore(){
    this.alertLoading("Buscando mais Pokémons","Aguarde um momento");
    this.pokeapiservice.searchPokemon(this.objPages.next).subscribe(
      async (response)=>{
        const r: any = response;
        for(let i=0;i<r.results.length;i++){
          await this.objAllPokemons.push(r.results[i]);
        }
        this.objPages = r;
        await this.getAllInfo();
        Swal.close();
    }, (error) => 
        console.log(error)
    );
  }

  onClickButtonRedirect(item: any){
    this.router.navigate(['/detail', {state: item.id}]);
  }

  alertLoading(mensagem: string, texto?: string){
    if (texto) {
      Swal.fire({
          title: mensagem,
          text: texto,
          allowOutsideClick: false
      });
      Swal.showLoading();
    } else {
      Swal.fire({
          title: mensagem,
          allowOutsideClick: false
      });
      Swal.showLoading();
    }
  }

  alertError(){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!'
    })
  }

}
