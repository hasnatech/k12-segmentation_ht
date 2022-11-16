import { AfterViewInit, Component } from '@angular/core';
import * as AOS from 'aos';
import { MainService } from './service/main.service';
import { security } from 'ht-security';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  title = 'k12-segmentation';

  constructor(public service: MainService) { }

  ngAfterViewInit(): void {
    AOS.init({
      once: true,
    });
    security({
      mode: "development"
    })
    const script1 = document.createElement('script');
    script1.src = '//assets.adobedtm.com/47e3e446470b/b72afcffdbd7/launch-a14b516e7cd5.min.js';
    document.head.appendChild(script1);

  }
}
