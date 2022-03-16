import { Injectable } from "@angular/core";
import { AngularFireDatabase} from '@angular/fire/database';
import { InitialTemplate } from "./class/initialTemplate";

@Injectable({
    providedIn: 'root'
})
export class InitializeService {

    constructor(private db: AngularFireDatabase){ }

    insertInitial(initalTemplate: InitialTemplate){
       return this.db.list('initialTemplate').push(initalTemplate)
        .then((result: any) =>{
          return result.key;
        });
        
      }
}