import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'graficas',
    loadChildren: ()=>import('./graficas/modulo/graficas.module').then(m=>m.GraficasModule)
  },
  {
    path: '**',
    redirectTo:'graficas'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
