import { Component, Input } from '@angular/core';
import redirectToUrl from '../../utils/redirect-to-url';

interface ButtonProperties {
  color?: string;
  bgColor?: string;
  title: string;
}

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class Button {
  @Input() title!: string;
  @Input() color: string = '#042326';
  @Input() bgColor: string = 'var(--primary)';
  @Input() redirectLink: string | undefined;

  redirectToUrl(): void {
    if (!this.redirectLink) return;
    redirectToUrl(this.redirectLink);
  }
}
