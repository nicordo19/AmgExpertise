import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-presentation',
  imports: [CommonModule],
  templateUrl: './presentation.html',
  styleUrl: './presentation.scss',
})
export class PresentationComponent {
  activeTab = signal<'about' | 'teams'>('about');

  setActiveTab(tab: 'about' | 'teams') {
    this.activeTab.set(tab);
  }
}
