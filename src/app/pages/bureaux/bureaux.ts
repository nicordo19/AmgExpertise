import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface Office {
  name: string;
  address: string;
  city: string;
  phone: string;
  folder: string;
  photos: string[];
}

@Component({
  selector: 'app-bureaux',
  imports: [CommonModule],
  templateUrl: './bureaux.html',
  styleUrl: './bureaux.scss',
})
export class BureauxComponent {
  showModal = signal(false);
  selectedOffice = signal<Office | null>(null);
  currentPhotoIndex = signal(0);

  offices: Office[] = [
    {
      name: 'Metz',
      address: '1, Allée de la Chapelle',
      city: '57530 Ars-Laquenexy',
      phone: '03.87.51.13.53',
      folder: 'metz',
      photos: ['facade.jpg', 'photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg', 'photo5.jpg'],
    },
    {
      name: 'Thionville',
      address: '4, Place Alain Gérard',
      city: '57100 Thionville',
      phone: '03.82.88.23.94',
      folder: 'Thionville',
      photos: ['fassade.jpg', 'PHOTO-2026-01-03-18-44-54 2.jpg', 'photo2.jpg'],
    },
    {
      name: 'Strasbourg',
      address: '5 rue du Cerf Bon',
      city: '67100 Strasbourg',
      phone: '03.88.34.72.80',
      folder: 'Strasbour',
      photos: ['fassade.jpg', 'photo1.jpg', 'photo2.jpg'],
    },
    {
      name: 'Luxembourg',
      address: '67 rue Michel Weiler',
      city: 'L2730 Luxembourg',
      phone: '(00352)26.10.25.57',
      folder: 'luxembourg',
      photos: [],
    },
    {
      name: 'Verdun',
      address: '18 avenue du Général de Gaulle',
      city: '55100 Verdun',
      phone: '03.29.86.10.15',
      folder: 'verdun',
      photos: ['fassade.jpg', 'photo1.jpg'],
    },
    {
      name: 'Nancy',
      address: '2 rue du Bois de la Chapelle',
      city: '54500 Vandoeuvre-les-Nancy',
      phone: '03.83.49.59.20',
      folder: 'nancy',
      photos: ['fassade.jpg', 'photo1.jpg', 'photo2.jpg'],
    },
    {
      name: 'Golbey',
      address: '2 rue Hausmatte',
      city: '68190 Soultz',
      phone: '03.29.81.42.42',
      folder: 'Golebey',
      photos: ['fassade.jpg', 'photo1.jpg', 'photo2.jpg'],
    },
    {
      name: 'Mulhouse',
      address: '2 rue Hausmatte',
      city: '68190 Soultz',
      phone: '03.29.81.42.42',
      folder: 'mulhouse',
      photos: [],
    },
    {
      name: 'Reims',
      address: '2 rue Hausmatte',
      city: '68190 Soultz',
      phone: '03.29.81.42.42',
      folder: 'reims',
      photos: [],
    },
  ];

  openGallery(office: Office) {
    if (office.photos.length > 0) {
      this.selectedOffice.set(office);
      this.currentPhotoIndex.set(0);
      this.showModal.set(true);
    }
  }

  closeGallery() {
    this.showModal.set(false);
    this.selectedOffice.set(null);
    this.currentPhotoIndex.set(0);
  }

  nextPhoto() {
    const office = this.selectedOffice();
    if (office && this.currentPhotoIndex() < office.photos.length - 1) {
      this.currentPhotoIndex.update((i) => i + 1);
    }
  }

  prevPhoto() {
    if (this.currentPhotoIndex() > 0) {
      this.currentPhotoIndex.update((i) => i - 1);
    }
  }

  getPhotoPath(office: Office, photo: string): string {
    return `IMG amg-expertise/${office.folder}/${photo}`;
  }
}
