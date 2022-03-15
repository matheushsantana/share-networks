import { Injectable } from "@angular/core";
import { AngularFireDatabase} from '@angular/fire/database';
import { InitialTemplate } from "./class/initialTemplate";

@Injectable({
    providedIn: 'root'
})
export class initializeService {

    constructor(private db: AngularFireDatabase){ }

    insertInitial(initalTemplate: InitialTemplate){
        this.db.list('initialTemplate').push(initalTemplate)
        .then((result: any) =>{
          console.log(result.key);
        });
        alert("Cadastrado com Sucesso!");
      }
}