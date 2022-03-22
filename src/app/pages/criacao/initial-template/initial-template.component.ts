import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InitialTemplate } from '../shared/class/initialTemplate';
import { CriacaoService } from '../shared/criacao.service';

@Component({
  selector: 'app-initial-template',
  templateUrl: './initial-template.component.html',
  styleUrls: ['./initial-template.component.scss']
})
export class InitialTemplateComponent implements OnInit {
  
  initialTemplate: InitialTemplate;

  constructor(private criacaoService: CriacaoService, private route: Router) { }

  ngOnInit(): void {
    this.initialTemplate = new InitialTemplate();
  }

  submitInitialTemplate() {
    this.criacaoService.insertInitial(this.initialTemplate).catch((error: any) => {
      alert(error);
    });
    this.route.navigate(['/criacao/secoes'])
  }
}
