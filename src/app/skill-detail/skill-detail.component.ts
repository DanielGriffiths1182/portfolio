import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import * as $ from 'jquery';

import { Skill }         from '../skill';
import { SkillService }  from '../skill.service';

@Component({
  selector: 'app-skill-detail',
  templateUrl: './skill-detail.component.html',
  styleUrls: [ './skill-detail.component.scss' ]
})
export class SkillDetailComponent implements OnInit {
  @Input() skill: Skill;

  constructor(
    private route: ActivatedRoute,
    private skillService: SkillService,
    private location: Location
  ) {}


  ngOnInit(): void {
    this.getSkill();
  }

  getSkill(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.skillService.getSkill(id)
      .subscribe(skill => this.skill = skill);
  }

  goBack(): void {
    this.location.back();
  }

  ngAfterViewInit() {
  }
}
