import { Component, OnInit } from '@angular/core';
import { InitializeService } from '../../initialize/shared/initialize.service';
import { Apresentacao } from '../shared/class/apresentacao';

@Component({
  selector: 'app-apresentacao',
  templateUrl: './apresentacao.component.html',
  styleUrls: ['./apresentacao.component.scss']
})
export class ApresentacaoComponent implements OnInit {

  apresentacao: Apresentacao;

  constructor(private initializeService: InitializeService) { }

  ngOnInit(): void {
  }

  submitApresentacao() {
    this.initializeService.insertApresentacao(this.apresentacao).then(m => {
      if (m != undefined) {
        //this.subEtapa = 7
      }
    })
  }

}
