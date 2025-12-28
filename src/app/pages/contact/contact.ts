import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };

  submitForm(): void {
    console.log('Form submitted:', this.formData);
    // Ici vous pouvez ajouter la logique d'envoi d'email
    alert('Merci pour votre message! Nous vous recontacterons dans les meilleurs délais.');
    this.resetForm();
  }

  resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    };
  }
}
