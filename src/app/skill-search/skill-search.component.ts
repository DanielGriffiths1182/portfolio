import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import * as $ from 'jquery';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Skill } from '../skill';
import { SkillService } from '../skill.service';

@Component({
  selector: 'app-skill-search',
  templateUrl: './skill-search.component.html',
  styleUrls: [ './skill-search.component.scss' ]
})
export class SkillSearchComponent implements OnInit {
  skills$: Observable<Skill[]>;
  private searchTerms = new Subject<string>();

  constructor(private skillService: SkillService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.skills$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.skillService.searchSkills(term)),
    );
  }

  ngAfterViewInit() {
  }
}
