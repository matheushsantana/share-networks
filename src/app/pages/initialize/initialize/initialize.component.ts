import { Component, OnInit } from '@angular/core';
import { InitialTemplate } from '../shared/class/initialTemplate';
import { InitializeService } from '../shared/initialize.service';

@Component({
  selector: 'app-initialize',
  templateUrl: './initialize.component.html',
  styleUrls: ['./initialize.component.scss']
})
export class InitializeComponent implements OnInit {

  etapas: number = 0;
  subEtapa: number = 7;
  auxSubEtapas: boolean = false;
  initialTemplate: InitialTemplate;

  titleSubEtapa: string[] = ['Boas-Vindas', 'Apresentação', 'Catálogo', 'Links', 'Redes sociais', 'Adicionar item', 'Adicionar link', '']

  constructor(private initializeService: InitializeService) { }

  ngOnInit(): void {
    this.initialTemplate = new  InitialTemplate();
  }

  submitInitialTemplate(){
    this.initializeService.insertInitial(this.initialTemplate).then(m => {
      console.log('result: ', m)
    })
  }

  avanca(value: number) {
    if (this.subEtapa == 5) {
      this.avancaSubOpcoes(2);
    } else if(this.subEtapa == 6){
      this.avancaSubOpcoes(3);
    }else {
      this.auxSubEtapas = false;
      this.subEtapa = 7;
      if (value == 0) {
        if (this.etapas == 0) {
        } else {
          this.etapas--
        }
      } else {
        this.etapas++
      }
    }
  }

  avancaOpcoes(value: number) {
    this.auxSubEtapas = true
    this.etapas++
    this.subEtapa = value
  }

  avancaSubOpcoes(value: number) {
    this.auxSubEtapas = true
    this.subEtapa = value
  }

}