import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { LanguageService } from './services/language/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: ` <router-outlet></router-outlet> `,
})
export class App {
  constructor(private route: ActivatedRoute, private languageService: LanguageService) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const language = params['language'];
      if (language) this.languageService.changeLanguage(language);
    });
  }
}
