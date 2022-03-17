import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/database';
import { AdicionarLink } from "./class/adicionarLink";
import { Apresentacao } from "./class/apresentacao";
import { BoasVindas } from "./class/boasVindas";
import { Catalogo } from "./class/catalogo";
import { InitialTemplate } from "./class/initialTemplate";
import { Link } from "./class/link";
import { RedesSociais } from "./class/redesSociais";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InitializeService {

  constructor(private db: AngularFireDatabase) { }

  // Inital
  insertInitial(initalTemplate: InitialTemplate) {
    return this.db.list('cliente/123456/site/initialTemplate').push(initalTemplate)
      .then((result: any) => {
        return result.key;
      });
  }

  getAllInitial(){
    return this.db.list('cliente/123456/site/initialTemplate')
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.exportVal() }));
      })
    );
  }

  // Boas Vindas
  insertBoasVindas(boasvindas: BoasVindas){
    return this.db.list('cliente/123456/site/boas-vindas').push(boasvindas)
      .then((result: any) => {
        return result.key;
      });
  }

  getAllBoasVindas(){
    return this.db.list('cliente/123456/site/boas-vindas')
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.exportVal() }));
      })
    );
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