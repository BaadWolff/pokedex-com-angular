import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Pokemon {
  name : string
}

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  pokemons:Pokemon[] = []; 

  constructor(private httpClient: HttpClient ) {
    this.carregarPokemons();
  }

  async carregarPokemons() {
    const requisicao = await this.httpClient
      .get<any>('https://pokeapi.co/api/v2/pokemon?limit=1118')
      .toPromise();

    this.pokemons = requisicao.results;
  }
}
