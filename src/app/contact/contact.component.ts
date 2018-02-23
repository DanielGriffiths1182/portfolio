import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    var $cell = $('.card');

    $cell.find('.js-expander').click(function() {
      var $thisCell = $(this).closest('.card');

      if ($thisCell.hasClass('is-collapsed')) {
        $cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed').addClass('is-inactive');
        $thisCell.removeClass('is-collapsed').addClass('is-expanded');

        if ($cell.not($thisCell).hasClass('is-inactive')) {
        } else {
          $cell.not($thisCell).addClass('is-inactive');
        }
      }
      else {
        $thisCell.removeClass('is-expanded').addClass('is-collapsed');
        $cell.not($thisCell).removeClass('is-inactive');
      }
    });

    $cell.find('.js-collapser').click(function() {
      var $thisCell = $(this).closest('.card');

      $thisCell.removeClass('is-expanded').addClass('is-collapsed');
      $cell.not($thisCell).removeClass('is-inactive');
    });
  }
}
