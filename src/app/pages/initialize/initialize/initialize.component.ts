import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initialize',
  templateUrl: './initialize.component.html',
  styleUrls: ['./initialize.component.scss']
})
export class InitializeComponent implements OnInit {

  etapas: number = 2;
  subEtapa: number = 0;
  auxSubEtapas: boolean = false;

  titleEtapa: string[] = ['', '', 'Monte seu Site', 'Boas-Vindas']
  titleSubEtapa: string[] = ['Boas-Vindas', 'Apresentação', 'Catálogo', 'Links', 'Redes Sociais']

  constructor() { }

  ngOnInit(): void {
  }

  avanca(value: number) {
    this.auxSubEtapas = false;
    if (value == 0) {
      if (this.etapas == 0) {
      } else {
        this.etapas--
      }
    } else {
      this.etapas++
    }
  }

  avancaOpcoes(value: number) {
    this.auxSubEtapas = true
    this.etapas++
    this.subEtapa = value
  }

}
