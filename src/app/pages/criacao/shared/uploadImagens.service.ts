import { Injectable } from "@angular/core";
import { AngularFireStorage } from "@angular/fire/storage";

@Injectable({
    providedIn: 'root'
  })
  export class uploadImagensService {

    urlImagem: string;

    constructor(private storage: AngularFireStorage){ }

    uploadImagem(imagem: File){
        let path = `imagens/user/123456/${imagem.name}`;
        let task = this.storage.upload(path, imagem)

        task.snapshotChanges().subscribe((s) => {
            if(s?.task.snapshot.state == 'success'){
                this.storage.ref(`imagens/user/123456/${imagem.name}`).getDownloadURL().subscribe(dados => {
                    this.urlImagem = dados 
                })
            }
        })
    }
  }