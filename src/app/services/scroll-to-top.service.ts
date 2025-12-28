import { Injectable, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ScrollToTopService {
  private router = inject(Router);

  constructor() {
    this.setupScrollToTop();
  }

  private setupScrollToTop(): void {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      window.scrollTo(0, 0);
    });
  }
}
