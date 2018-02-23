import { Component, OnInit } from '@angular/core';
import { Skill } from '../skill';
import { SkillService } from '../skill.service';

import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  skills: Skill[] = [];
  random: number;

  constructor(private skillService: SkillService) { }

  ngOnInit() {
    this.getSkills();
    this.random = 0.5 - Math.random();
  }

  getSkills(): void {
    this.skillService.getSkills()
      .subscribe(skills => this.skills = skills.slice(1, 5));
  }
}
