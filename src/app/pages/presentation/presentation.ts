import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface TeamMember {
  nom: string;
  prenom: string;
  initiales: string;
  qualite: string;
  statut: string;
  specialite: string;
}

@Component({
  selector: 'app-presentation',
  imports: [CommonModule],
  templateUrl: './presentation.html',
  styleUrl: './presentation.scss',
})
export class PresentationComponent {
  activeTab = signal<'about' | 'teams'>('about');

  // Tableau des membres de l'équipe
  teamMembers: TeamMember[] = [
    // Dirigeants
    {
      nom: 'GALLOIS',
      prenom: 'CHRISTOPHE',
      initiales: 'CG',
      qualite: 'Expert diplômé',
      statut: 'dirigeant',
      specialite: 'expert judiciaire, PJ/RC TMA PL 2R COLLISION',
    },
    {
      nom: 'FOURNIER',
      prenom: 'LAURENT',
      initiales: 'LF',
      qualite: 'Expert diplômé',
      statut: 'dirigeant',
      specialite: 'expert judiciaire, PJ/RC TMA PL 2R COLLISION',
    },
    {
      nom: 'CLAUDEL',
      prenom: 'ARNAUD',
      initiales: 'AC',
      qualite: 'Expert diplômé',
      statut: 'dirigeant',
      specialite: 'expert judiciaire, PJ/RC TMA PL 2R COLLISION',
    },
    {
      nom: 'THIERY',
      prenom: 'JORDAN',
      initiales: 'JT',
      qualite: 'Expert diplômé',
      statut: 'dirigeant',
      specialite: 'expert judiciaire, PJ/RC TMA PL 2R COLLISION',
    },
    {
      nom: 'PORTMANN',
      prenom: 'FLORIAN',
      initiales: 'FP',
      qualite: 'Expert diplômé',
      statut: 'dirigeant',
      specialite: 'expert judiciaire, PJ/RC TMA PL 2R COLLISION',
    },
    {
      nom: 'GRECO',
      prenom: 'JORDANE',
      initiales: 'JG',
      qualite: 'Expert diplômé',
      statut: 'dirigeant',
      specialite: 'PJ/RC TMA PL 2R COLLISION',
    },

    // Experts diplômés

    {
      nom: 'DUCHENE',
      prenom: 'THOMAS',
      initiales: 'TD',
      qualite: 'Expert diplômé',
      statut: '',
      specialite: 'PJ/RC TMA PL 2R COLLISION',
    },
    {
      nom: 'SPIETH',
      prenom: 'JOHNNY',
      initiales: 'JS',
      qualite: 'Expert diplômé',
      statut: '',
      specialite: 'PJ/RC TMA PL 2R COLLISION - RCCI',
    },
    {
      nom: 'LUZZARA',
      prenom: 'YANN',
      initiales: 'YL',
      qualite: 'Expert diplômé',
      statut: '',
      specialite: 'PJ/RC TMA PL 2R COLLISION',
    },
    {
      nom: 'CAPPELLACCI',
      prenom: 'YANN',
      initiales: 'YC',
      qualite: 'Expert diplômé',
      statut: '',
      specialite: 'PJ/RC/JUDICIAIRE',
    },
    {
      nom: 'ABAHOUSSE',
      prenom: 'MOHAMED',
      initiales: 'MA',
      qualite: 'Expert diplômé',
      statut: '',
      specialite: 'TMA COLLISION',
    },
    {
      nom: 'DETOMASO',
      prenom: 'EVAN',
      initiales: 'ED',
      qualite: 'Expert diplômé',
      statut: '',
      specialite: 'PJ/RC COLLISION',
    },
    {
      nom: 'COLELLA',
      prenom: 'ANTONI',
      initiales: 'AC',
      qualite: 'Expert diplômé',
      statut: '',
      specialite: 'PJ/RC PL COLLECTION COLLISION FORMATION',
    },

    // Experts en formation
    {
      nom: 'GEORGEL',
      prenom: 'SEBASTIEN',
      initiales: 'SG',
      qualite: 'Expert en formation',
      statut: '',
      specialite: 'TMA COLLISION',
    },
    {
      nom: 'BOYE',
      prenom: 'NICOLAS',
      initiales: 'NB',
      qualite: 'Expert en formation',
      statut: '',
      specialite: '2R COLLISION',
    },
    {
      nom: 'HOUILLON',
      prenom: 'MICKAEL',
      initiales: 'MH',
      qualite: 'Expert en formation',
      statut: '',
      specialite: 'TMA COLLISION',
    },
    {
      nom: 'MALECKI',
      prenom: 'CHRISTOPHE',
      initiales: 'CM',
      qualite: 'Expert en formation',
      statut: '',
      specialite: 'COLLISION',
    },
    {
      nom: 'ROYER',
      prenom: 'JEAN CLAUDE',
      initiales: 'JC',
      qualite: 'Expert en formation',
      statut: '',
      specialite: 'COLLISION',
    },
    {
      nom: 'WEIL',
      prenom: 'REMY',
      initiales: 'RE',
      qualite: 'Expert en formation',
      statut: '',
      specialite: 'TMA',
    },
    {
      nom: 'LINARD',
      prenom: 'LUCAS',
      initiales: 'LL',
      qualite: 'Expert en formation',
      statut: '',
      specialite: 'COLLISION',
    },
    {
      nom: 'MICLO',
      prenom: 'CONSTANT',
      initiales: 'MC',
      qualite: 'Expert en formation',
      statut: '',
      specialite: '2R COLLISION',
    },
    {
      nom: 'KRIEGER',
      prenom: 'FLORENT',
      initiales: 'FK',
      qualite: 'Expert en formation',
      statut: '',
      specialite: 'COLLISION',
    },
    {
      nom: 'PETIT ETIENNE',
      prenom: 'FLORENT',
      initiales: 'FP',
      qualite: 'Expert en formation',
      statut: '',
      specialite: 'PJ/RC',
    },
    {
      nom: 'PETIT',
      prenom: 'JEROME',
      initiales: 'JP',
      qualite: 'Expert en formation',
      statut: '',
      specialite: 'PJ/RC COLLISION',
    },

    // Techniciens non diplômés
    {
      nom: 'RETTENBACH',
      prenom: 'GREGORY',
      initiales: 'GR',
      qualite: 'Technicien non diplômé',
      statut: '',
      specialite: 'COLLISION',
    },
    {
      nom: 'COGUIEC',
      prenom: 'GAEL',
      initiales: 'GC',
      qualite: 'Technicien non diplômé',
      statut: '',
      specialite: 'COLLISION',
    },
    {
      nom: 'JAVELOT',
      prenom: 'LUDOVIC',
      initiales: 'LJ',
      qualite: 'Technicien non diplômé',
      statut: '',
      specialite: 'COLLISION',
    },

    // Administratifs - Responsables
    {
      nom: 'BRUNETTE',
      prenom: 'CECILE',
      initiales: 'CB',
      qualite: 'Administratif',
      statut: 'responsable administratif',
      specialite: 'PJ/RC/JUDICIAIRE RH COLLISION',
    },
    {
      nom: 'CHARTREUX',
      prenom: 'SANDRINE',
      initiales: 'SC',
      qualite: 'Administratif',
      statut: 'responsable administratif',
      specialite: 'PJ/RC/COLLISION',
    },
    {
      nom: 'CLOSSE',
      prenom: 'LORENE',
      initiales: 'LC',
      qualite: 'Administratif',
      statut: 'responsable administratif',
      specialite: 'PJ/RC/JUDICIAIRE RH COLLISION',
    },
    {
      nom: 'GUERIN',
      prenom: 'NATHALIE',
      initiales: 'NG',
      qualite: 'Administratif',
      statut: 'responsable administratif',
      specialite: 'PJ/RC/JUDICIAIRE RH',
    },

    // Administratifs
    {
      nom: 'KOUAKOU',
      prenom: 'OLIVIA',
      initiales: 'OK',
      qualite: 'Administratif',
      statut: '',
      specialite: 'PJ/RC',
    },
    {
      nom: 'GAUTHIER',
      prenom: 'SANDRA',
      initiales: 'SG',
      qualite: 'Administratif',
      statut: '',
      specialite: 'PJ/RC',
    },
    {
      nom: 'BEAUDOIN',
      prenom: 'VERONIQUE',
      initiales: 'VB',
      qualite: 'Administratif',
      statut: '',
      specialite: 'PT/COLLISION',
    },
    {
      nom: 'SIMON',
      prenom: 'ELODIE',
      initiales: 'ES',
      qualite: 'Administratif',
      statut: '',
      specialite: 'PT/COLLISION',
    },
    {
      nom: 'RUSE',
      prenom: 'ALINE',
      initiales: 'AR',
      qualite: 'Administratif',
      statut: '',
      specialite: 'COLLISION',
    },
    {
      nom: 'MOISAN',
      prenom: 'YOHANN',
      initiales: 'YM',
      qualite: 'Administratif',
      statut: '',
      specialite: 'COLLISION',
    },
    {
      nom: 'DANIEL',
      prenom: 'ALICIA',
      initiales: 'AD',
      qualite: 'Administratif',
      statut: '',
      specialite: 'PT/COLLISION',
    },
    {
      nom: 'CHOTKAN',
      prenom: 'KESHIA',
      initiales: 'KC',
      qualite: 'Administratif',
      statut: '',
      specialite: 'PJ/RC/JUDICIAIRE',
    },
    {
      nom: 'HUMBERT',
      prenom: 'BERTRAND',
      initiales: 'BH',
      qualite: 'Administratif',
      statut: '',
      specialite: 'PJ/RC/JUDICIAIRE',
    },
    {
      nom: 'FONTAINE',
      prenom: 'LAURYNN',
      initiales: 'LF',
      qualite: 'Administratif',
      statut: '',
      specialite: 'PJ/RC',
    },
    {
      nom: "L'ECRIVAIN",
      prenom: 'LAURENE',
      initiales: 'LE',
      qualite: 'Administratif',
      statut: '',
      specialite: 'PT COLLISION',
    },
    {
      nom: 'MARCUS',
      prenom: 'KATIA',
      initiales: 'KM',
      qualite: 'Administratif',
      statut: '',
      specialite: 'COLLISION',
    },
    {
      nom: 'PIERRE',
      prenom: 'MARINE',
      initiales: 'MP',
      qualite: 'Administratif',
      statut: '',
      specialite: 'COLLISION',
    },
    {
      nom: 'PARISET',
      prenom: 'MORGANE',
      initiales: 'MP',
      qualite: 'Administratif',
      statut: '',
      specialite: 'COLLISION',
    },
    {
      nom: 'GOBBI',
      prenom: 'MELANIE',
      initiales: 'MG',
      qualite: 'Administratif',
      statut: '',
      specialite: 'COLLISION',
    },
    {
      nom: 'HAINZELIN',
      prenom: 'SOPHIE',
      initiales: 'SH',
      qualite: 'Administratif',
      statut: '',
      specialite: 'PT COLLISION',
    },
  ];

  // Méthode pour obtenir les membres par catégorie
  getDirigeants(): TeamMember[] {
    return this.teamMembers.filter((member) => member.statut === 'dirigeant');
  }

  getExperts(): TeamMember[] {
    return this.teamMembers.filter(
      (member) =>
        (member.qualite === 'Expert diplômé' || member.qualite === 'Expert en formation') &&
        member.statut !== 'dirigeant',
    );
  }

  getTechniciens(): TeamMember[] {
    return this.teamMembers.filter((member) => member.qualite === 'Technicien non diplômé');
  }

  getAdministratifs(): TeamMember[] {
    return this.teamMembers.filter((member) => member.qualite === 'Administratif');
  }

  setActiveTab(tab: 'about' | 'teams') {
    this.activeTab.set(tab);
  }
}
