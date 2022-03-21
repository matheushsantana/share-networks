import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
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
  export class CriacaoService {
  
    constructor(private db: AngularFireDatabase) { }
  
    getSite() {
      return this.db.list(`cliente/123456/site`)
        .snapshotChanges()
        .pipe(
          map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.exportVal() }));
          })
        );
    }
  
    // Inital
    insertInitial(initalTemplate: InitialTemplate) {
      var key: string = 'initialTemplate'
      console.log(key, initalTemplate)
      return this.db.list('cliente/123456/site').update(key, initalTemplate)
        .catch((error: any) => {
          console.error(error);
        });
    }
  
    // Boas Vindas
    insertBoasVindas(boasvindas: BoasVindas) {
      var key: string = 'boas-vindas'
      return this.db.list('cliente/123456/site').update(key, boasvindas)
        .catch((error: any) => {
          console.error(error);
        });
    }
  
    // Apresentação
    insertApresentacao(apresentacao: Apresentacao) {
      return this.db.list('cliente/site/apresentacao').push(apresentacao)
        .then((result: any) => {
          return result.key;
        });
    }
  
    // Catalogo
    insertCatalogo(catalogo: Catalogo) {
      return this.db.list('cliente/site/catalogo').push(catalogo)
        .then((result: any) => {
          return result.key;
        });
    }
  
    // Links
    insertLinks(links: Link) {
      return this.db.list('cliente/site/links').push(links)
        .then((result: any) => {
          return result.key;
        });
    }
  
    // Redes Sociais
    insertRedesSociais(redesSociais: RedesSociais) {
      return this.db.list('cliente/site/redes-sociais').push(redesSociais)
        .then((result: any) => {
          return result.key;
        });
    }
  
  }