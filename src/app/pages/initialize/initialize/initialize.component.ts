import { Component, OnInit } from '@angular/core';
import { AdicionarLink } from '../shared/class/adicionarLink';
import { Apresentacao } from '../shared/class/apresentacao';
import { BoasVindas } from '../shared/class/boasVindas';
import { Catalogo } from '../shared/class/catalogo';
import { InitialTemplate } from '../shared/class/initialTemplate';
import { ItemCatalogo } from '../shared/class/itemCatalogo';
import { Link } from '../shared/class/link';
import { RedesSociais } from '../shared/class/redesSociais';
import { InitializeService } from '../shared/initialize.service';

@Component({
  selector: 'app-initialize',
  templateUrl: './initialize.component.html',
  styleUrls: ['./initialize.component.scss']
})
export class InitializeComponent implements OnInit {

  etapas: number = 3;
  subEtapa: number = 7;
  auxSubEtapas: boolean = false;
  initialTemplate: InitialTemplate;
  boasVindas: BoasVindas;
  apresentacao: Apresentacao;
  catalogo: Catalogo;
  links: Link;
  redeSociais: RedesSociais;
  itemCatalogo: ItemCatalogo;
  adicionarLink: AdicionarLink;

  titleSubEtapa: string[] = ['Boas-Vindas', 'Apresentação', 'Catálogo', 'Links', 'Redes sociais', 'Adicionar item', 'Adicionar link', 'Monte seu site', '']

  constructor(private initializeService: InitializeService) { }

  ngOnInit(): void {
    this.initialTemplate = new  InitialTemplate();
    this.boasVindas = new BoasVindas();
    this.apresentacao = new Apresentacao();
    this.catalogo = new  Catalogo();
    this.links = new  Link();
    this.redeSociais = new RedesSociais();
  }

  submitInitialTemplate(){
    this.initializeService.insertInitial(this.initialTemplate).then(m => {
      if(m != undefined){
        this.avanca(1);
      }
    })
  }

  submitBoasVindas(){

  }

  submitApresentacao(){

  }

  submitLinks(){

  }

  submitItensCatalogo(){

  }

  submitAdicionarLinks(){

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
