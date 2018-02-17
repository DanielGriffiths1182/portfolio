import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { Skill } from '../skill';
import { SkillService } from '../skill.service';

import { SkillSearchComponent } from '../skill-search/skill-search.component';

import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  p;
  skills: Skill[];

  constructor(private skillService: SkillService) { }

  ngOnInit() {
    this.getSkills();
  }

  getSkills(): void {
    this.skillService.getSkills()
        .subscribe(skills => this.skills = skills);
  }

  add(skillName: string): void {
    skillName = skillName.trim();
    if (!skillName) { return; }
    this.skillService.addSkill({ skillName } as Skill)
      .subscribe(skill => {
        this.skills.push(skill);
      });
  }

  delete(skill: Skill): void {
    this.skills = this.skills.filter(h => h !== skill);
    this.skillService.deleteSkill(skill).subscribe();
  }


  ngAfterViewInit() {

  }
}
