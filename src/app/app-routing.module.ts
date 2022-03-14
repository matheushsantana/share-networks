import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './pages/info-all/info/info.component';
import { LoginComponent } from './pages/login/login/login.component';

const routes: Routes = [
  { path: '', component: InfoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', loadChildren: () => import('./pages/cadastro/cadastro.module').then(m => m.CadastroModule) },
  { path: 'profile', loadChildren: () => import('./pages/public-profile-all/public-profile.module').then(m => m.PublicProfileModule) },
  { path: 'initialize', loadChildren: () => import('./pages/initialize/initialize.module').then(m => m.InitializeModule ) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
