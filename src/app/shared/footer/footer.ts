import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AssurancesPartenairesComponent } from '../assurances-partenaires/assurances-partenaires';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, AssurancesPartenairesComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {}
