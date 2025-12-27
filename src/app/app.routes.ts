import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { PresentationComponent } from './pages/presentation/presentation';
import { ServicesComponent } from './pages/services/services';
import { BureauxComponent } from './pages/bureaux/bureaux';
import { NousChoisirComponent } from './pages/nous-choisir/nous-choisir';
import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'nos-services', component: ServicesComponent },
  { path: 'nos-bureaux', component: BureauxComponent },
  { path: 'nous-choisir', component: NousChoisirComponent },
  { path: 'contact', component: ContactComponent }
];
