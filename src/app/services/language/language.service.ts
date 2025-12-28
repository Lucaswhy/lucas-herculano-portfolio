import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Disponible languages: 'pt' / 'en'

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLanguage = new BehaviorSubject<string>('en');

  currentLanguage$ = this.currentLanguage.asObservable();

  constructor() {}

  changeLanguage(newLanguage: string): void {
    this.currentLanguage.next(newLanguage);
  }

  getCurrentLanguage(): string {
    return this.currentLanguage.value;
  }
}
