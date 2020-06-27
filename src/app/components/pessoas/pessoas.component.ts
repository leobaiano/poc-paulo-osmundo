import { Component, OnInit } from '@angular/core';
import { PessoasService } from 'src/app/services/pessoas.service';
import { Pessoas } from 'src/app/models/pessoas.model';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.scss']
})
export class PessoasComponent implements OnInit {
  pessoas: Array<Pessoas>;

  constructor(
    private pessoasService: PessoasService
  ) {}

  ngOnInit() {
    this.pessoas = this.pessoasService.getPessoas(true);
  }

  deletePessoa(idPessoa: number): void {
    delete this.pessoas[idPessoa];
  }

}
