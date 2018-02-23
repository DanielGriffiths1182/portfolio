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

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.skills$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.skillService.searchSkills(term)),
    );
  }

}
