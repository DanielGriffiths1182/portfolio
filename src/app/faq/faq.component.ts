import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $(function(){
      $("#switch-view").click(function(){
        $(this).find("button").toggleClass("active");
        $(".article-wrapper").toggleClass("bloc col-xs-12 col-xs-4");
      });
    });
  }

}
