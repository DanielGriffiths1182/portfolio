import { Component, ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss']
})
export class BiographyComponent implements OnInit {

    constructor() {}


  ngOnInit() {
  }

  ngAfterViewInit() {
    // $( document ).ready(function() {
    //   var audio = document.getElementById("audio").src = "../../assets/song.m4a";
    // });
  }
}
