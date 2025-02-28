import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  isDarkMode: boolean = false;

  constructor(private renderer: Renderer2) {
    this.checkTheme();
  }

  checkTheme() {
    this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.renderer.setAttribute(document.body, 'class', this.isDarkMode ? 'dark' : 'light');
  }
}
