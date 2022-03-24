import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardCriacao } from "src/app/guards/authGuardsCriacao.service";
import { ApresentacaoComponent } from "./apresentacao/apresentacao.component";
import { BoasVindasComponent } from "./boas-vindas/boas-vindas.component";
import { CatalogoComponent } from "./catalogo/catalogo.component";
import { InicioComponent } from "./inicio/inicio.component";
import { InitialTemplateComponent } from "./initial-template/initial-template.component";
import { LinksComponent } from "./links/links.component";
import { MonteSeuSiteComponent } from "./monte-seu-site/monte-seu-site.component";
import { PreviewComponent } from "./preview/preview.component";
import { RedesSociaisComponent } from "./redes-sociais/redes-sociais.component";
import { SecoesComponent } from "./secoes/secoes.component";

const routes: Routes = [
    { path: 'inicio', component: InicioComponent, canActivate: [AuthGuardCriacao] },
    { path: 'template-inicial', component: InitialTemplateComponent, canActivate: [AuthGuardCriacao] },
    { path: 'secoes', component: SecoesComponent, canActivate: [AuthGuardCriacao] },
    { path: 'apresentacao', component: ApresentacaoComponent, canActivate: [AuthGuardCriacao] },
    { path: 'boas-vindas', component: BoasVindasComponent, canActivate: [AuthGuardCriacao] },
    { path: 'catalogo', component: CatalogoComponent, canActivate: [AuthGuardCriacao] },
    { path: 'links', component: LinksComponent, canActivate: [AuthGuardCriacao] },
    { path: 'redes-sociais', component: RedesSociaisComponent, canActivate: [AuthGuardCriacao] },
    { path: 'monte-seu-site', component: MonteSeuSiteComponent, canActivate: [AuthGuardCriacao] },
    { path: 'preview', component: PreviewComponent, canActivate: [AuthGuardCriacao] }
 ];
 
 @NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule]
 })
 export class CriacaoRoutingModule{ }