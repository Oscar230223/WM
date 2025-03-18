import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { InicioPage } from './inicio.page'; // ✅ Importamos InicioPage en lugar de declararlo

const routes: Routes = [
  {
    path: '',
    component: InicioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    InicioPage // ✅ Importamos InicioPage aquí, porque es standalone
  ]
})
export class InicioPageModule {}
