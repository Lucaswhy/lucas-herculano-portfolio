import { Component, Input, signal } from '@angular/core';
import { Button } from '../../../../components/button/button.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  imports: [Button],
})
export class AboutMe {
  @Input() content!: string;
  @Input() buttonRedirectLink!: string;
  @Input() buttonLabel!: string;

  protected readonly about = signal('');

  ngOnChanges() {
    if (this.content) {
      this.about.set(this.content);
    }
  }
}
