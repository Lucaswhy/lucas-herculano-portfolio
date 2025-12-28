import { Component, Input, OnInit, signal } from '@angular/core';
import { WorkContainer } from '../../../../components/work-container/work-container.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-my-work',
  standalone: true,
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss'],
  imports: [WorkContainer],
})
export class MyWork implements OnInit {
  @Input() title!: string;
  @Input() language!: string;
  ngOnInit() {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }
}
