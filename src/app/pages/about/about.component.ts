import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $('.about-page h2').blast({
      delimiter: 'character',
      tag: 'span',
    });
    let a = 0;
    $('.blast').map((index, element) => {
      if (a === 300) {
        a = 400;
      }

      if (a === 1200) {
        a = 1400;
      }

      setTimeout(() => {
        $(element).addClass('animated bounceIn');
      }, 1500);

      if (a < 1200) {
        a = a + 100;
      } else {
        a = a + 70;
      }
    });

    setTimeout(() => {
      $('.blast').removeClass('animated bounceIn');
      $('.blast').css('opacity', 1);

      $('.blast').mouseenter((element) => {
        $(element.target).addClass('animated rubberBand');

        $(element.target).one(
          'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
          () => {
            $(element.target).removeClass('animated rubberBand');
          }
        );
      });
    }, 3000);
  }
}
