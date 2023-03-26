import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';

const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent ,

  children: [
    {path: '', component: LandingPageComponent},


]},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }