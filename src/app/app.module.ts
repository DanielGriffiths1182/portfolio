import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule }    from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { SkillService } from './skill.service';
import { SkillsComponent } from './skills/skills.component';
import { SkillDetailComponent } from './skill-detail/skill-detail.component';
import { SkillSearchComponent } from './skill-search/skill-search.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectService } from './project.service';


import { AppRoutingModule } from './/app-routing.module';
import { RepositoryComponent } from './repository/repository.component';
import { RepositoryService } from './repository.service';
import { HeaderComponent } from './header/header.component';
import { HeaderService } from './header.service';
import { FooterComponent } from './footer/footer.component';
import { FooterService } from './footer.service';
import { BiographyComponent } from './biography/biography.component';
import { BiographyService } from './biography.service';
import { ChartComponent } from './chart/chart.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SkillsComponent,
    SkillDetailComponent,
    ProjectsComponent,
    SkillSearchComponent,
    RepositoryComponent,
    HeaderComponent,
    FooterComponent,
    BiographyComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    NgxPaginationModule,
    ChartsModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    SkillService,
    ProjectService,
    RepositoryService,
    HeaderService,
    FooterService,
    BiographyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
