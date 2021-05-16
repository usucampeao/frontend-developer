import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { pokeApiService } from '../services/api-pokeapi.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {

  sIdPokemon : any;
  objPokemon: any;
  hoverPokemon = false;

  constructor(private activatedRoute: ActivatedRoute,
    public router: Router,
    public location: Location,
    private pokeapiservice: pokeApiService) { }

  async ngOnInit() {
    this.objPokemon = [];
    this.sIdPokemon = this.activatedRoute.snapshot.paramMap.get('state');
    this.alertLoading("Consultando Pokémon","Aguarde um momento");
    await this.searchIdPokemon();
    Swal.close();
  }

  async searchIdPokemon(){
    await this.pokeapiservice.searchIdPokemon(this.sIdPokemon).subscribe(
      async (response)=>{
        const r : any = response;
        r.weight = (r.weight)*0.1;
        r.height = (r.height)/10;
        this.objPokemon = r;
    }, (error) => 
        this.alertError()
    );
  }

  onClickNextPokemon(){
    this.sIdPokemon = this.objPokemon.id+1;
    this.router.navigate(['/detail', {state: this.sIdPokemon}]).then(() => {
      window.location.reload();
    });
  }

  onClickPreviousPokemon(){
    this.sIdPokemon = this.objPokemon.id-1;
    this.router.navigate(['/detail', {state: this.sIdPokemon}]).then(() => {
      window.location.reload();
    });
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
