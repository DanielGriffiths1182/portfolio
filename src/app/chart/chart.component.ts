import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx"
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { SkillService } from '../skill.service';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor(
    public skillsComponent: SkillsComponent,
    public skillsService: SkillService
  ) { }

  ngOnInit() {
  }

  // Radar
  public radarChartLabels:string[] = ['Rails',
                                      'Ruby',
                                      'Java',
                                      'Python',
                                      'PHP',
                                      'Laravel',
                                      'SQL',
                                      'jQuery',
                                      'Ajax',
                                      'AngularJS',
                                      'ReactJS',
                                      'Javascript',
                                      'Typescript',
                                      'CSS',
                                      'SCSS',
                                      'AWS',
                                      'Cloudflare',
                                      'cPanel',
                                      'Wordpress',
                                      'Git'];

  public radarChartData:any = [
    {
      data: [0, 0, 0, 0, 0, 0, 0, 75, 70, 85, 30, 85, 50, 90, 90, 0, 0, 0, 0, 0],
      label: 'Front-End'
    },
    {
      data: [85, 90, 50, 45, 70, 65, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      label: 'Back-End'
    },
    {
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 60, 70, 90],
      label: 'Auxillary'
    }
  ];
  public radarChartType:string = 'radar';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };

  public chartColors: Array<any> = [
    { // first color
      backgroundColor: '#f8464340',
      borderColor: '#f8464340',
      pointBackgroundColor: '#f8464340',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#f8464340'
    },
    { // second color
      backgroundColor: '#8e1010a1',
      borderColor: '#8e1010a1',
      pointBackgroundColor: '#8e1010a1',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#8e1010a1'
    },
    { // third color
      backgroundColor: '#590a0aab',
      borderColor: '#590a0aab',
      pointBackgroundColor: '#590a0aab',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#590a0aab'
    }];
}
