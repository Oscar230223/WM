import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router'; // ✅ Importar Router

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  constructor(private router: Router) {} 

  goToTab1() {
    this.router.navigate(['/tabs/tab1']); 
  }
}
