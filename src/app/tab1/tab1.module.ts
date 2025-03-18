import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./tab1.page').then(m => m.Tab1Page) // ✅ Importación correcta para standalone
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // ✅ Solo importa RouterModule
})
export class Tab1PageModule {}

