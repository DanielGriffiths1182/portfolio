import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgStyle } from '@angular/common';

import { RepositoryService } from '../repository.service';
import { Repo } from '../repo';

import * as $ from 'jquery';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {

  repos: Repo[];

  @Input() skill: [number, string, string, string, string];

  constructor(private repositoryService: RepositoryService) { }

  ngOnInit() {
    this.getRepos();
  }

  getRepos(): void {
    this.repositoryService.getRepos()
        .subscribe(repos => this.repos = repos);
  }

  checkSkill(repos): void {

  }

  ngAfterViewInit() {

  }

}
