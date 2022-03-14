import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Share Networks';

  userLogado: boolean = true;
  navBar: boolean = true;

  constructor(){
    
  }

  ngOnInit(): void {
    this.navBarConfig();
  }

  navBarConfig(){
    if(window.location.href.split('/')[3] == 'initialize'){
      this.navBar = false;
    }
  }

}
