import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // ✅ Importar FormsModule

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule], // ✅ Agregar FormsModule aquí
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  // Credenciales válidas
  private validEmail: string = 'admin@gmail.com';
  private validPassword: string = '123456789';

  constructor(private router: Router) {}

  login() {
    if (this.email === this.validEmail && this.password === this.validPassword) {
      this.router.navigate(['/tabs/tab1']); // Navegar a la siguiente pantalla
    } else {
      this.errorMessage = 'Correo o contraseña incorrectos.';
    }
  }
}
