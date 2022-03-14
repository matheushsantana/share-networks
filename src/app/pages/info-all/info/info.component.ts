import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  valor: string = '9,90';
  plano: string = 'Anual'

  constructor() { }

  ngOnInit(): void {
  }

  mudaPlano(value: number) {
    var auxBtnAnual = document.getElementById('btn-anual') as HTMLElement
    var auxBtnMensal = document.getElementById('btn-mensal') as HTMLElement
    if (value == 1) {
      auxBtnAnual.classList.add('btn-ativo')
      auxBtnMensal.classList.remove('btn-ativo')
      this.valor = '9,90'
      this.plano = 'Anual'
    } else {
      auxBtnMensal.classList.add('btn-ativo')
      auxBtnAnual.classList.remove('btn-ativo')
      this.valor = '15,90'
      this.plano = 'Mensal'
    }



  }

}
