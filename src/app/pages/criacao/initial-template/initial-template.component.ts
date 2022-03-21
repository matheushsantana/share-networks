import { Component, OnInit } from '@angular/core';
import { InitializeService } from '../../initialize/shared/initialize.service';
import { InitialTemplate } from '../shared/class/initialTemplate';

@Component({
  selector: 'app-initial-template',
  templateUrl: './initial-template.component.html',
  styleUrls: ['./initial-template.component.scss']
})
export class InitialTemplateComponent implements OnInit {
  
  initialTemplate: InitialTemplate;

  constructor(private initializeService: InitializeService) { }

  ngOnInit(): void {
  }

  submitInitialTemplate() {
    console.log('1; ',this.initialTemplate)
    this.initializeService.insertInitial(this.initialTemplate).then(m => {
      if (m != undefined) {
        //this.boasVindas.nomeExibicao = this.initialTemplate.titleSite
        //this.avanca(1);
      }
    })
  }
}
