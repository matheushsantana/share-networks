import { Injectable } from "@angular/core";
import { AngularFireStorage } from "@angular/fire/storage";
import { InitializeComponent } from "../initialize/initialize.component";

@Injectable({
    providedIn: 'root'
  })
  export class uploadImagensService {

    urlImagem: string;

    constructor(private storage: AngularFireStorage){ }

    uploadImagem(imagem: File){
        let path = `myFiles/${imagem.name}`;
        let task = this.storage.upload(path, imagem)

        task.snapshotChanges().subscribe((s) => {
            if(s?.task.snapshot.state == 'success'){
                this.storage.ref(`myFiles/${imagem.name}`).getDownloadURL().subscribe(dados => {
                    this.urlImagem = dados 
                })
            }
        })
    }
  }