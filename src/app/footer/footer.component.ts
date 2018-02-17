import { Component, OnInit } from '@angular/core';

import { FooterService } from '../footer.service';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
