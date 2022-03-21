import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { FormsModule } from "@angular/forms";
import { InitialTemplateComponent } from "./initial-template/initial-template.component";
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { LinksComponent } from './links/links.component';
import { RedesSociaisComponent } from './redes-sociais/redes-sociais.component';
import { CriacaoRoutingModule } from "./criacao-routing.module";
import { InicioComponent } from './inicio/inicio.component';
import { SecoesComponent } from './secoes/secoes.component';
import { PreviewComponent } from './preview/preview.component';
import { MonteSeuSiteComponent } from './monte-seu-site/monte-seu-site.component';

@NgModule({
    declarations: [
        InitialTemplateComponent,
        BoasVindasComponent,
        ApresentacaoComponent,
        CatalogoComponent,
        LinksComponent,
        RedesSociaisComponent,
        InicioComponent,
        SecoesComponent,
        PreviewComponent,
        MonteSeuSiteComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        CriacaoRoutingModule,
        AngularFireStorageModule,
        AngularFirestoreModule
    ],
    providers: [],
    bootstrap: [],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  })
  export class CriacaoModule{}