import { Component, Input } from '@angular/core';
import { LanguageService } from '../../services/language/language.service';

@Component({
  selector: 'app-switch-translate',
  standalone: true,
  templateUrl: './switch-translate.component.html',
  styleUrls: ['./switch-translate.component.scss'],
  imports: [],
})
export class SwitchTranslate {
  constructor(private languageService: LanguageService) {}

  @Input() language!: string;
  protected isClicked: boolean = false;

  newLanguage(newLanguage: string): void {
    this.languageService.changeLanguage(newLanguage);
  }
}
