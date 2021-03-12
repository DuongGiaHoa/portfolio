import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.animation();
    this.tagCanvas();
  }

  animation() {
    $('.skill-page h2').blast({
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

  tagCanvas() {
    if (
      !$('#myCanvas').tagcanvas(
        {
          textColour: '#a5a5a5',
          outlineThickness: 0.5,
          outlineColour: '#FE0853',
          maxSpeed: 0.06,
          freezeActive: true,
          shuffleTags: true,
          shape: 'sphere',
          zoom: 0.8,
          noSelect: true,
          textFont: 'Courier New,"Open Sans", sans-serif',
          pinchZoom: true,
          freezeDecel: true,
          fadeIn: 3000,
          initial: [0.3, -0.1],
          depth: 1.1,
        },
        'tags'
      )
    ) {
      // something went wrong, hide the canvas container
      $('#myCanvasContainer').hide();
    }
  }
}
