import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
  messageId?: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  // URL de la fonction Firebase en production
  private apiUrl = 'https://sendcontactemail-q6quph6tra-ew.a.run.app';

  constructor(private http: HttpClient) {}

  // Version temporaire pour tester sans Brevo
  sendContactEmailTemp(formData: ContactFormData): Observable<EmailResponse> {
    console.log('📧 Email à envoyer:', formData);
    alert(
      `✅ Formulaire reçu !\n\nNom: ${formData.name}\nEmail: ${formData.email}\nTél: ${formData.phone}\nSujet: ${formData.subject}\n\nMessage: ${formData.message}`,
    );
    return new Observable((observer) => {
      observer.next({ success: true, message: 'Email envoyé (mode test)' });
      observer.complete();
    });
  }

  sendContactEmail(formData: ContactFormData): Observable<EmailResponse> {
    console.log('🚀 Envoi vers:', this.apiUrl);
    console.log('📦 Données:', formData);
    return this.http.post<EmailResponse>(this.apiUrl, formData);
  }
}
