import { Component, OnInit } from '@angular/core';
import { InitializeService } from '../../initialize/shared/initialize.service';
import { Catalogo } from '../shared/class/catalogo';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {

  catalogo: Catalogo;

  constructor(private initializeService: InitializeService) { }

  ngOnInit(): void {
  }

  submitCatalogo() {
    this.initializeService.insertCatalogo(this.catalogo).then(m => {
      if (m != undefined) {
        //this.subEtapa = 7
      }
    })
  }

}
