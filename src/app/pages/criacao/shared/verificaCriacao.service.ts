import { Injectable } from "@angular/core";
import { CriacaoService } from "./criacao.service";

@Injectable({
    providedIn: 'root'
  })
  export class VeerificaCriacaoService{

    constructor(private criacaoService: CriacaoService){ }

    getAllData(){
        this.criacaoService.getSite().subscribe(dados => {
            console.log('result: ', dados)
        })
    }

  }