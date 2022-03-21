import { Component, OnInit } from '@angular/core';
import { Link } from '../shared/class/link';
import { CriacaoService } from '../shared/criacao.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  links: Link;

  constructor(private initializeService: CriacaoService) { }

  ngOnInit(): void {
  }

  submitLinks() {
    this.initializeService.insertLinks(this.links).then(m => {
      if (m != undefined) {
        //this.subEtapa = 7
      }
    })
  }

}
