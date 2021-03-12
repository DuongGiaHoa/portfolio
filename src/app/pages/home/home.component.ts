import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $('.home-page h1').blast({
      delimiter: 'character',
      tag: 'span',
    });
    test();

  }
}

function test() {
  let a = 0;
  $('.blast').map((index, element) => {
    if (a === 300) {
      a = 400;
    }

    if (a === 1200) {
      a = 1400;
    }

    // if (a === 400) {
    //   setTimeout(() => {
    //     $('.home-page h1 img').addClass('animated rotateIn');
    //   }, 500);
    // }

    setTimeout(() => {
      $(element).addClass('animated bounceIn');
    }, a);

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

  // setTimeout(() => {
  //   $('.home-page .flat-button').addClass('animated bounceIn');
  //   $('.home-page .flat-button').one(
  //     'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
  //     () => {
  //       $('.home-page .flat-button').removeClass('animated bounceIn');
  //       $('.home-page .flat-button').css('opacity', 1);
  //     }
  //   );
  // }, 2000);

  // $('.home-page .flat-button').mouseenter(function () {
  //   var el = $(this);

  //   $(this).addClass('animated rubberBand');
  //   $(this).one(
  //     'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
  //     function () {
  //       el.removeClass('animated rubberBand');
  //     }
  //   );
  // });
}
