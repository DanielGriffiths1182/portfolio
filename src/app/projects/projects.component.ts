import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(public projectService: ProjectService) {}

  ngOnInit() {
  }

}
