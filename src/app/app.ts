import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollToTopService } from './services/scroll-to-top.service';
import { FooterComponent } from './shared/footer/footer';
import { HeaderComponent } from './shared/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('amg-expertise');
  private scrollToTopService = inject(ScrollToTopService);
}
