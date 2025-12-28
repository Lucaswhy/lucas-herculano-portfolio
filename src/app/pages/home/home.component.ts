import { Component, signal } from '@angular/core';
import { AboutMe } from './sections/about-me/about-me.component';
import { MyWork } from './sections/my-work/my-work.component';
import { Contact } from './sections/contact/contact.component';
import { SwitchTranslate } from '../../components/switch-translate/switch-translate.component';
import { LanguageService } from '../../services/language/language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [AboutMe, MyWork, Contact, SwitchTranslate],
})
export class Home {
  constructor(protected languageService: LanguageService) {}

  protected readonly title = signal('lucas-herculano-portfolio');
}
