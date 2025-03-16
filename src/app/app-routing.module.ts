import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InicioPage } from './pages/inicio/inicio.page'; // ✅ Importamos InicioPage

const routes: Routes = [
  { path: '', component: InicioPage }, // ✅ Esta es la pantalla inicial
  { path: 'tabs', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) } // ✅ Ruta de las pestañas
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

