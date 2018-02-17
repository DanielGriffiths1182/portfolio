import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService {

  projects: string[] = [];

  add(project: string) {
    this.projects.push(project);
  }

  clear() {
    this.projects = [];
  }

}
