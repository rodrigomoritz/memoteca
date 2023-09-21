import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listarPensamentos = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Angular',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Minha propriedade é decora com component @input',
      autoria: 'Angular',
      modelo: 'modelo3'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
