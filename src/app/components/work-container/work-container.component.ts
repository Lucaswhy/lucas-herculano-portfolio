import { Component, Input } from '@angular/core';
import redirectToUrl from '../../utils/redirect-to-url';

interface WorkContainerProperties {
  title: string;
  imgUrl: string;
  imgAlt: string;
  description: string;
  redirectLink?: string;
}

@Component({
  selector: 'app-work-container',
  standalone: true,
  templateUrl: './work-container.component.html',
  styleUrls: ['./work-container.component.scss'],
})
export class WorkContainer implements WorkContainerProperties {
  @Input({ required: true }) title!: string;
  @Input() imgUrl!: string;
  @Input() imgAlt!: string;
  @Input() description!: string;
  @Input() redirectLink: string | undefined;

  redirectToUrl(): void {
    redirectToUrl(this.redirectLink);
  }
}
