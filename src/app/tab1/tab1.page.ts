import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  isDarkMode: boolean = false;

  constructor(private renderer: Renderer2) {
    this.checkTheme();
  }

  checkTheme() {
    this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.renderer.setAttribute(document.body, 'class', this.isDarkMode ? 'dark' : 'light');
  }

  togglePassword() {
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
  }
}
