import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-assurances-partenaires',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assurances-partenaires.html',
  styleUrls: ['./assurances-partenaires.scss'],
})
export class AssurancesPartenairesComponent {
  insurances = [
    { name: 'Matmut', logo: 'matmut.png' },
    { name: 'MMA', logo: 'mma.png' },
    { name: 'Mutuelle des Motards', logo: 'mutuelle-des-motard.png' },
    { name: 'Assurance Crédit Mutuel', logo: 'Assurance-Credit-Mutuel.png' },
    { name: 'CNP', logo: 'CNP.png' },
    { name: 'CA Assurance', logo: 'CA.png' },
    { name: 'Monceau', logo: 'monceau.png' },
    { name: 'Areas', logo: 'AREAS.png' },
    { name: 'SMA BTP', logo: 'SMA-BTP.png' },
    { name: 'MAFA', logo: 'MAFA.png' },
    { name: 'AGPM', logo: 'AGPM.png' },
    { name: 'MACSF', logo: 'MACSF.png' },
    { name: 'Abeille', logo: 'abeille.png' },
    { name: 'GAN', logo: 'GAN.png' },
    { name: 'GMF', logo: 'GMF.png' },
    { name: 'MAAF', logo: 'MAAF.png' },
    { name: 'MACIF', logo: 'MACIF.png' },
    { name: 'MAIF', logo: 'MAIF.png' },
    { name: 'SwissLife', logo: 'SwissLife.png' },
    { name: 'BPCE', logo: 'BPCE.png' },
    { name: 'Mutuelle de Poitiers', logo: 'mutuelle-depoitiers-assurances.png' },
  ];
}
