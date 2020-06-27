import { Injectable } from '@angular/core';
import { Pessoas } from '../models/pessoas.model';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor() { }

  pessoas: Array<Pessoas> = [
    {
      nome: 'Leo Baiano',
      apelido: 'Leo',
      idade: 36
    },
    {
      nome: 'Paulo Valadares',
      apelido: 'Paulo',
      idade: 40
    },
    {
      nome: 'Osmundo Cavalcanti',
      apelido: 'Osmundo',
      idade: 50
    }
  ];

  getPessoas(type: boolean): Array<Pessoas> {
    if (type) {
      return this.pessoas;
    }
    return this.pessoas;
  }

  getPessoa(): Pessoas {
    return this.pessoas[0];
  }
}
