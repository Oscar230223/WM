import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  standalone: true, // ✅ Asegura que sea standalone
  imports: [CommonModule, IonicModule], // ✅ Importa módulos necesarios
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page {
  email: string = 'perl@gmail.com'; // Correo del usuario

  constructor(private router: Router) {}

  logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/inicio']); // Redirige al inicio de sesión
  }
}
