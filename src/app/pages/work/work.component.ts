import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  works = [];
  constructor() {
    this.works = [
      { image: 'assets/images/logo/hanbiro.png', url: 'http://hanbiro.com' },
      { image: 'assets/images/logo/opla.png', url: 'https://www.opla.app' },
      { image: 'assets/images/logo/gamifly.png', url: 'https://gamifly.gg' }
    ];
  }

  ngOnInit() {}
}
