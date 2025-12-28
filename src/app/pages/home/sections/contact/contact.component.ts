import { Component, Input } from '@angular/core';
import redirectToUrl from '../../../../utils/redirect-to-url';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [],
})
export class Contact {
  @Input() title!: string;

  redirectToUrl(redirectLink: string): void {
    redirectToUrl(redirectLink);
  }
}
