import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initialize',
  templateUrl: './initialize.component.html',
  styleUrls: ['./initialize.component.scss']
})
export class InitializeComponent implements OnInit {

  etapas: number = 0;

  titleEtapa: string[] =  ['', '', 'Monte seu Site', 'Boas-Vindas']

  constructor() { }

  ngOnInit(): void {
  }

  avanca(){
    this.etapas++
  }

}
