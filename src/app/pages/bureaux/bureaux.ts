import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, signal, ViewChild } from '@angular/core';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';

interface Office {
  name: string;
  address: string;
  city: string;
  phone: string;
  folder: string;
  photos: string[];
  lat: number;
  lng: number;
}

@Component({
  selector: 'app-bureaux',
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: './bureaux.html',
  styleUrl: './bureaux.scss',
})
export class BureauxComponent implements AfterViewInit {
  @ViewChild(GoogleMap) map!: GoogleMap;

  showModal = signal(false);
  selectedOffice = signal<Office | null>(null);
  currentPhotoIndex = signal(0);
  openInfoWindowIndex = signal<number | null>(null);

  // Stocker les marqueurs avancés et info windows
  private advancedMarkers: google.maps.marker.AdvancedMarkerElement[] = [];
  private infoWindows: google.maps.InfoWindow[] = [];

  // Rendre google accessible dans le template
  google = google;

  // Configuration de la carte
  mapCenter: google.maps.LatLngLiteral = { lat: 48.8, lng: 6.2 };
  mapZoom = 7;
  mapOptions: google.maps.MapOptions = {
    mapId: 'DEMO_MAP_ID', // Requis pour AdvancedMarkerElement
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    maxZoom: 15,
    minZoom: 6,
  };

  offices: Office[] = [
    {
      name: 'Metz',
      address: '1, Allée de la Chapelle',
      city: '57530 Ars-Laquenexy',
      phone: '03.87.51.13.53',
      folder: 'metz',
      photos: ['facade.jpg', 'photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg', 'photo5.jpg'],
      lat: 49.0708,
      lng: 6.2197,
    },
    {
      name: 'Thionville',
      address: '4, Place Alain Gérard',
      city: '57100 Thionville',
      phone: '03.82.88.23.94',
      folder: 'Thionville',
      photos: ['fassade.jpg', 'PHOTO-2026-01-03-18-44-54 2.jpg', 'photo2.jpg'],
      lat: 49.3586,
      lng: 6.1681,
    },
    {
      name: 'Strasbourg',
      address: '5 rue du Cerf Bon',
      city: '67100 Strasbourg',
      phone: '03.88.34.72.80',
      folder: 'Strasbour',
      photos: ['fassade.jpg', 'photo1.jpg', 'photo2.jpg'],
      lat: 48.5734,
      lng: 7.7521,
    },
    {
      name: 'Luxembourg',
      address: '67 rue Michel Weiler',
      city: 'L2730 Luxembourg',
      phone: '(00352)26.10.25.57',
      folder: 'luxembourg',
      photos: [],
      lat: 49.6116,
      lng: 6.1319,
    },
    {
      name: 'Verdun',
      address: '18 avenue du Général de Gaulle',
      city: '55100 Verdun',
      phone: '03.29.86.10.15',
      folder: 'verdun',
      photos: ['fassade.jpg', 'photo1.jpg'],
      lat: 49.1599,
      lng: 5.3842,
    },
    {
      name: 'Nancy',
      address: '2 rue du Bois de la Chapelle',
      city: '54500 Vandoeuvre-les-Nancy',
      phone: '03.83.49.59.20',
      folder: 'nancy',
      photos: ['fassade.jpg', 'photo1.jpg', 'photo2.jpg'],
      lat: 48.6561,
      lng: 6.1614,
    },
    {
      name: 'Golbey',
      address: '2 rue Hausmatte',
      city: '68190 Soultz',
      phone: '03.29.81.42.42',
      folder: 'Golebey',
      photos: ['fassade.jpg', 'photo1.jpg', 'photo2.jpg'],
      lat: 48.1943,
      lng: 6.4371,
    },
    {
      name: 'Mulhouse',
      address: '2 rue Hausmatte',
      city: '68190 Soultz',
      phone: '03.29.81.42.42',
      folder: 'mulhouse',
      photos: [],
      lat: 47.7468,
      lng: 7.3389,
    },
    {
      name: 'Reims',
      address: '2 rue Hausmatte',
      city: '68190 Soultz',
      phone: '03.29.81.42.42',
      folder: 'reims',
      photos: [],
      lat: 49.2583,
      lng: 4.0317,
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

  ngAfterViewInit() {
    // Attendre que la carte soit initialisée
    setTimeout(() => {
      this.initAdvancedMarkers();
    }, 1000);
  }

  private initAdvancedMarkers() {
    if (!this.map?.googleMap) {
      console.error('Google Map not initialized');
      return;
    }

    const { AdvancedMarkerElement, PinElement } = google.maps.marker;

    this.offices.forEach((office, index) => {
      // Créer un marqueur en forme de goutte bleue
      const pin = new PinElement({
        background: '#202f70', // Bleu de votre thème
        borderColor: '#1a2557',
        glyphColor: 'white',
        scale: 1.2,
      });

      // Créer le marqueur avancé
      const marker = new AdvancedMarkerElement({
        map: this.map.googleMap,
        position: { lat: office.lat, lng: office.lng },
        content: pin.element,
        title: office.name,
      });

      // Créer l'info window
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div class="map-info-card">
            <img src="IMG amg-expertise/${office.folder}/${office.photos[0]}" alt="${office.name}" style="width: 100%; height: 100px; object-fit: cover; border-radius: 6px 6px 0 0;">
            <div class="info-content" style="padding: 0.4rem;">
              <h3 style="margin: 0 0 0.5rem 0; font-size: 0.95rem; color: #202f70;">${office.city}</h3>
              <p style="margin: 0.3rem 0; font-size: 0.8rem;">${office.address}</p>
              <p style="margin: 0.3rem 0; font-size: 0.8rem; color: #dc3545; font-weight: 600;">☎️ ${office.phone}</p>
            </div>
          </div>
        `,
      });

      // Ajouter l'événement click
      marker.addListener('click', () => {
        // Fermer toutes les info windows
        this.infoWindows.forEach((iw) => iw.close());
        // Ouvrir celle-ci
        infoWindow.open(this.map.googleMap, marker);
      });

      this.advancedMarkers.push(marker);
      this.infoWindows.push(infoWindow);
    });
  }

  openInfoWindow(index: number) {
    this.openInfoWindowIndex.set(index);
  }

  closeInfoWindow() {
    this.openInfoWindowIndex.set(null);
  }
}
