import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  isDarkMode: boolean = false;

  constructor(private renderer: Renderer2) {
    this.checkTheme();
  }

  checkTheme() {
    this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.renderer.setAttribute(document.body, 'class', this.isDarkMode ? 'dark' : 'light');
  }
}
