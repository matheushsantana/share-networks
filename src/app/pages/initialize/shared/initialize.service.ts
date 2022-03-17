import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/database';
import { AdicionarLink } from "./class/adicionarLink";
import { Apresentacao } from "./class/apresentacao";
import { BoasVindas } from "./class/boasVindas";
import { Catalogo } from "./class/catalogo";
import { InitialTemplate } from "./class/initialTemplate";
import { Link } from "./class/link";
import { RedesSociais } from "./class/redesSociais";

@Injectable({
  providedIn: 'root'
})
export class InitializeService {

  constructor(private db: AngularFireDatabase) { }

  // Inital
  insertInitial(initalTemplate: InitialTemplate) {
    return this.db.list('cliente/site/initialTemplate').push(initalTemplate)
      .then((result: any) => {
        return result.key;
      });

  }

  // Boas Vindas
  insertBoasVindas(boasvindas: BoasVindas){
    return this.db.list('cliente/site/boas-vindas').push(boasvindas)
      .then((result: any) => {
        return result.key;
      });
  }

  // Apresentação
  insertApresentacao(apresentacao: Apresentacao){
    return this.db.list('cliente/site/apresentacao').push(apresentacao)
    .then((result: any) => {
      return result.key;
    });
  }

  // Catalogo
  insertCatalogo(catalogo: Catalogo){
    return this.db.list('cliente/site/catalogo').push(catalogo)
    .then((result: any) => {
      return result.key;
    });
  }

  // Links
  insertLinks(links: Link){
    return this.db.list('cliente/site/links').push(links)
    .then((result: any) => {
      return result.key;
    });
  }

  // Redes Sociais
  insertRedesSociais(redesSociais: RedesSociais){
    return this.db.list('cliente/site/redes-sociais').push(redesSociais)
    .then((result: any) => {
      return result.key;
    });
  }

}