import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, RouterLink, HttpClientModule, CommonModule],
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

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  constructor(
    private emailService: EmailService,
    private cdr: ChangeDetectorRef,
  ) {}

  submitForm(): void {
    if (this.isSubmitting) return;

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    this.emailService.sendContactEmail(this.formData).subscribe({
      next: (response) => {
        console.log('Email envoyé avec succès via Brevo:', response);
        console.log('✅ Mise à jour de submitSuccess à true');
        this.submitSuccess = true;
        this.isSubmitting = false;
        console.log('✅ Mise à jour de isSubmitting à false');

        // Réinitialiser le formulaire immédiatement
        this.resetForm();
        this.cdr.detectChanges();

        // Masquer le message de succès après 5 secondes
        setTimeout(() => {
          this.submitSuccess = false;
        }, 5000);
      },
      error: (error) => {
        console.error("Erreur lors de l'envoi:", error);
        this.submitError = true;
        this.isSubmitting = false;
        this.cdr.detectChanges(); // Forcer la détection de changements

        // Masquer le message d'erreur après 5 secondes
        setTimeout(() => {
          this.submitError = false;
        }, 5000);
      },
    });
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
