import { Component, OnInit } from '@angular/core';
import { InitializeService } from '../../initialize/shared/initialize.service';
import { BoasVindas } from '../shared/class/boasVindas';
import { uploadImagensService } from '../shared/uploadImagens.service'

@Component({
  selector: 'app-boas-vindas',
  templateUrl: './boas-vindas.component.html',
  styleUrls: ['./boas-vindas.component.scss']
})
export class BoasVindasComponent implements OnInit {

  auxMostraImagemPerfil: boolean = false;
  mostraBtnLoadingImagemPerfil: number = 0;
  boasVindas: BoasVindas;

  constructor(private initializeService: InitializeService, private uploadImagensService: uploadImagensService) { }

  ngOnInit(): void {
  }

  submitBoasVindas() {
    this.initializeService.insertBoasVindas(this.boasVindas).then(m => {
      if (m != undefined) {
        //this.subEtapa = 7;
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

}
