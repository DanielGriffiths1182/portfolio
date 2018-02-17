import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../header.service';

import * as $ from 'jquery';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {

    var secondaryNav = $('.cd-secondary-nav'),
  		secondaryNavTopPosition = secondaryNav.offset().top,
  		taglineOffesetTop = $('#cd-intro-tagline').offset().top + $('#cd-intro-tagline').height() + parseInt($('#cd-intro-tagline').css('paddingTop').replace('px', '')),
  		contentSections = $('.cd-section');

  	$(window).on('scroll', function(){
  		( $(window).scrollTop() > taglineOffesetTop ) ? $('#cd-logo, .cd-btn').addClass('is-hidden') : $('#cd-logo, .cd-btn').removeClass('is-hidden');

  		if($(window).scrollTop() > secondaryNavTopPosition ) {
  			secondaryNav.addClass('is-fixed');
  			$('.cd-main-content').addClass('has-top-margin');
  			setTimeout(function() {
          secondaryNav.addClass('animate-children');
          $('#cd-logo').addClass('slide-in');
		      $('.cd-btn').addClass('slide-in');
        }, 50);
  		} else {
  			secondaryNav.removeClass('is-fixed');
  			$('.cd-main-content').removeClass('has-top-margin');
  			setTimeout(function() {
          secondaryNav.removeClass('animate-children');
          $('#cd-logo').removeClass('slide-in');

  				$('.cd-btn').removeClass('slide-in');
  	        }, 50);
  		}

  		updateSecondaryNavigation();
  	});

  	function updateSecondaryNavigation() {
  		contentSections.each(function(){
  			var actual = $(this),
  				actualHeight = actual.height() + parseInt(actual.css('paddingTop').replace('px', '')) + parseInt(actual.css('paddingBottom').replace('px', '')),
  				actualAnchor = secondaryNav.find('a[href="#'+actual.attr('id')+'"]');
  			if ( ( actual.offset().top - secondaryNav.height() <= $(window).scrollTop() ) && ( actual.offset().top +  actualHeight - secondaryNav.height() > $(window).scrollTop() ) ) {
  				actualAnchor.addClass('active');
  			}else {
  				actualAnchor.removeClass('active');
  			}
  		});
  	}

  	secondaryNav.find('ul a').on('click', function(event){
      event.preventDefault();
      var target= $((this as any).hash);
      $('body,html').animate({
      	'scrollTop': target.offset().top - secondaryNav.height() + 1
      	}, 400
      );
      //on mobile - close secondary navigation
      $('.cd-secondary-nav-trigger').removeClass('menu-is-open');
      secondaryNav.find('ul').removeClass('is-visible');
    });

  	//on mobile - open/close secondary navigation clicking/tapping the .cd-secondary-nav-trigger
  	$('.cd-secondary-nav-trigger').on('click', function(event){
  		event.preventDefault();
  		$(this).toggleClass('menu-is-open');
  		secondaryNav.find('ul').toggleClass('is-visible');
  	});

      //on mobile - open/close primary navigation clicking/tapping the menu icon
  	$('.cd-primary-nav').on('click', function(event){
  		if($(event.target).is('.cd-primary-nav')) $(this).children('ul').toggleClass('is-visible');
  	});
  }

}
