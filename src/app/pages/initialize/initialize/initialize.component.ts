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
import { uploadImagensService } from '../shared/uploadImagens.service';

@Component({
  selector: 'app-initialize',
  templateUrl: './initialize.component.html',
  styleUrls: ['./initialize.component.scss']
})
export class InitializeComponent implements OnInit {

  etapas: number = 0;
  subEtapa: number = 8;
  auxSubEtapas: boolean = false;
  initialTemplate: InitialTemplate;
  boasVindas: BoasVindas;
  apresentacao: Apresentacao;
  catalogo: Catalogo;
  links: Link;
  redeSociais: RedesSociais;
  itemCatalogo: ItemCatalogo;
  adicionarLink: AdicionarLink;

  auxMostraImagemPerfil: boolean = false;
  mostraBtnLoadingImagemPerfil: number = 0;
  auxCadaExistente: number = 0;

  boxBoasvindas: boolean = false;
  boxApresentacao: boolean = false;
  boxCatalogo: boolean = false;
  boxLinks: boolean = false;
  boxRedesSociais: boolean = false;

  titleSubEtapa: string[] = ['Boas-Vindas', 'Apresentação', 'Catálogo', 'Links', 'Redes sociais', 'Adicionar item', 'Adicionar link', 'Monte seu site', '']
  opcoes:any[]

  constructor(private initializeService: InitializeService, private uploadImagensService: uploadImagensService) { }

  ngOnInit(): void {
    this.initialTemplate = new InitialTemplate();
    this.boasVindas = new BoasVindas();
    this.apresentacao = new Apresentacao();
    this.catalogo = new Catalogo();
    this.links = new Link();
    this.redeSociais = new RedesSociais();

    this.getTemplates();
  }

  getTemplates() {
    this.initializeService.getSite().subscribe(dados => {
      if (dados[0] != undefined) {
        if (this.auxCadaExistente == 0) {
          this.boasVindas = dados[0]
          this.etapas = 3;
          this.subEtapa = 7;
        } else {
          this.auxCadaExistente = 2
        }
        this.mostraBoxExistentes(dados)
      } else {
        this.auxCadaExistente = 1;
      }
    })
  }

  mostraBoxExistentes(dados: any) {
    this.opcoes = [
      {
        'key': 'boas-vindas',
        'value': false
      },
      {
        'key': 'apresentacao',
        'value': false
      },
      { 
        'key': 'catalogo',
        'value': false
      },
      { 
        'key': 'links',
        'value': false
      }, 
      { 
        'key': 'redes-sociais',
        'value': false
      }
    ]
    for (var i = 0; i < dados.length; i++) {
      if(dados[i].key == 'boas-vindas'){
        this.boasVindas = dados[i];
      }
      if(dados[i].key == 'apresentacao'){
        this.apresentacao = dados[i];
      }
      if(dados[i].key == 'catalogo'){
        this.catalogo = dados[i];
      }
      if(dados[i].key == 'links'){
        this.links = dados[i];
      }
      if(dados[i].key == 'redes-sociais'){
        this.redeSociais = dados[i];
      }
      for (var j = 0; j < this.opcoes.length; j++) {
        if (dados[i].key == this.opcoes[j].key) {
          this.opcoes[j].value = true
        }
      }
    }
  }

  // Inicial Template
  submitInitialTemplate() {
    this.initializeService.insertInitial(this.initialTemplate).then(m => {
      if (m != undefined) {
        this.boasVindas.nomeExibicao = this.initialTemplate.titleSite
        this.avanca(1);
      }
    })
  }

  // Boas Vindas
  submitBoasVindas() {
    this.initializeService.insertBoasVindas(this.boasVindas).then(m => {
      if (m != undefined) {
        this.subEtapa = 7;
      }
    })
  }

  uploadImagemPerfil(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    this.uploadImagensService.uploadImagem(files[0])
    this.mostraBtnLoadingImagemPerfil = 1;

    var loopAuxImagem = setInterval(() => {
      if (this.uploadImagensService.urlImagem != undefined) {
        this.boasVindas.linkImgPerfil = this.uploadImagensService.urlImagem;
        this.auxMostraImagemPerfil = true;
        this.mostraBtnLoadingImagemPerfil = 2;
        clearInterval(loopAuxImagem);
      }
    }, 1500)
  }

  // Apresentação
  submitApresentacao() {
    this.initializeService.insertApresentacao(this.apresentacao).then(m => {
      if (m != undefined) {
        this.subEtapa = 7
      }
    })
  }

  // Catalogo
  submitCatalogo() {
    this.initializeService.insertCatalogo(this.catalogo).then(m => {
      if (m != undefined) {
        this.subEtapa = 7
      }
    })
  }

  submitItensCatalogo() {

  }

  // Links
  submitLinks() {
    this.initializeService.insertLinks(this.links).then(m => {
      if (m != undefined) {
        this.subEtapa = 7
      }
    })
  }

  submitAdicionarLinks() {

  }


  // Muda Template

  avanca(value: number) {
    if (this.subEtapa == 5) {
      this.avancaSubOpcoes(2);
    } else if (this.subEtapa == 6) {
      this.avancaSubOpcoes(3);
    } else {
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
