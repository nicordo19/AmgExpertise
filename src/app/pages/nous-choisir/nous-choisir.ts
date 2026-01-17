import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nous-choisir',
  imports: [CommonModule],
  templateUrl: './nous-choisir.html',
  styleUrl: './nous-choisir.scss',
})
export class NousChoisirComponent {
  stars = [1, 2, 3, 4, 5];
}
