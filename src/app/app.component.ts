import { Component, OnInit } from '@angular/core';
declare const $: any;
import * as feather from 'feather-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  ngOnInit() {
    feather.replace();

    $(document).ready(() => {
      const fv = $('#fullview').fullView({
        // Navigation
        navbar: '#navbar',
        dots: true,
        dotsPosition: 'right',

        // Scrolling
        easing: 'swing',
        backToTop: true,

        // Accessibility
        keyboardScrolling: false,

        // Callback
        onScrollEnd: (currentView, preView) => {
          // console.log('Current', currentView);
          // console.log('Previus', preView);
        },
      });

      $('#down').click(() => {
        // To Scroll Down 1 Section
        fv.data('fullView').scrollDown();

        // To Scroll Up 1 Section
        // fv.data('fullView').scrollDown();
      });

      $('#select').change(() => {
        // To Scroll to Specfic Section
        fv.data('fullView').scrollTo($(this).val());
      });
    });
  }
}
