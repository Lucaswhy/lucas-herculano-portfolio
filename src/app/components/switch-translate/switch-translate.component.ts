import { Component, Input } from '@angular/core';
import { LanguageService } from '../../services/language/language.service';

interface SwitchTranslateProperties {
  language: string;
}

@Component({
  selector: 'app-switch-translate',
  standalone: true,
  templateUrl: './switch-translate.component.html',
  styleUrls: ['./switch-translate.component.scss'],
  imports: [],
})
export class SwitchTranslate implements SwitchTranslateProperties {
  constructor(private languageService: LanguageService) {}

  @Input({ required: true }) language!: string;
  protected isClicked: boolean = false;

  newLanguage(newLanguage: string): void {
    this.languageService.changeLanguage(newLanguage);
  }
}
