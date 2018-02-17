import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    // TODO add other parameters to have cool interavtivity with the user, so they can learn about the skills
    // TODO Allow visitors to add skills if they are not present
    const skills = [
      {
        id: 1,
        skillName: 'Rails',
        skillLevel: 8,
        description: 'This is a description',
        stack: 'Back End'
      },
      {
        id: 2,
        skillName: 'Ruby',
        skillLevel: 9,
        description: 'This is a description',
        stack: 'Back End'
      },
      {
        id: 3,
        skillName: 'Javascript',
        skillLevel: 9,
        description: 'This is a description',
        stack: 'Front End'
      },
      {
        id: 4,
        skillName: 'Java',
        skillLevel: 4,
        description: 'This is a description',
        stack: 'Back End'
      },
      {
        id: 5,
        skillName: 'Python',
        skillLevel: 4,
        description: 'This is a description',
        stack: 'Back End'
      },
      {
        id: 6,
        skillName: 'PHP',
        skillLevel: 7,
        description: 'This is a description',
        stack: 'Back End'
      },
      {
        id: 7,
        skillName: 'Laravel',
        skillLevel: 6,
        description: 'This is a description',
        stack: 'Back End'
      },
      {
        id: 8,
        skillName: 'HTML',
        skillLevel: 10,
        description: 'This is a description',
        stack: 'Front End'
      },
      {
        id: 9,
        skillName: 'CSS',
        skillLevel: 10,
        description: 'This is a description',
        stack: 'Front End'
      },
      {
        id: 10,
        skillName: 'SQL',
        skillLevel: 9,
        description: 'This is a description',
        stack: 'Back End'
      },
      {
        id: 11,
        skillName: 'MySQL',
        skillLevel: 9,
        description: 'This is a description',
        stack: 'Back End'
      },
      {
        id: 12,
        skillName: 'Git',
        skillLevel: 9,
        description: 'This is a description',
        stack: 'Auxillary'
      },
      {
        id: 13,
        skillName: 'PostgreSQL',
        skillLevel: 9,
        description: 'This is a description',
        stack: 'Back End'
      },
      {
        id: 14,
        skillName: 'cPanel',
        skillLevel: 3,
        description: 'This is a description',
        stack: 'Auxillary'
      },
      {
        id: 15,
        skillName: 'jQuery',
        skillLevel: 8,
        description: 'This is a description',
        stack: 'Front End'
      },
      {
        id: 16,
        skillName: 'Ajax',
        skillLevel: 7,
        description: 'This is a description',
        stack: 'Front End'
      },
      {
        id: 17,
        skillName: 'AngularJS',
        skillLevel: 9,
        description: 'This is a description',
        stack: 'Front End'
      },
      {
        id: 18,
        skillName: 'ReactJS',
        skillLevel: 2,
        description: 'This is a description',
        stack: 'Front End'
      },
      {
        id: 19,
        skillName: 'AWS',
        skillLevel: 4,
        description: 'This is a description',
        stack: 'Auxillary'
      },
      {
        id: 20,
        skillName: 'SCSS',
        skillLevel: 9,
        description: 'This is a description',
        stack: 'Front End'
      },
      {
        id: 21,
        skillName: 'CloudFlare',
        skillLevel: 4,
        description: 'This is a description',
        stack: 'Auxillary'
      },
      {
        id: 22,
        skillName: 'Wordpress',
        skillLevel: 6,
        description: 'This is a description',
        stack: 'Auxillary'
      }
    ];


    const repos = [
      {
        id: 1,
        name: 'Angular Portfolio Site',
        skills: ['AngularJS', 'Javascript', 'HTML', 'CSS', 'SCSS', 'jQuery', 'Typescript'],
        link: 'https://github.com/DanielGriffiths1182/robust-angularJS-portfolio-site-application',
        description: 'A robust (Javascript, Typescript, HTML, SCSS) AngularJS, building towards new portfolio',
        mainSkill: 'Typescript',
        url: 'url("../../assets/repos/l_sublime_text_angular.png")'
      },{
        id: 2,
        name: 'Ruby Codewars Archive',
        skills: ['Ruby'],
        link: 'https://github.com/DanielGriffiths1182/ruby-codewars-archive',
        description: '87 Ruby exercises and tests',
        mainSkill: 'Ruby',
        url: 'url("../../assets/repos/coinbase-with-ruby-4.png")'
      },
      {
        id: 3,
        name: 'PHP Codewars Archive',
        skills: ['PHP'],
        link: 'https://github.com/DanielGriffiths1182/php_codewars_archive',
        description: '25 PHP exercises and tests',
        mainSkill: 'PHP',
        url: 'url("../../assets/repos/php-example-6.png")'
      },{
        id: 4,
        name: 'Javascript Codewars Archive',
        skills: ['Javascript'],
        link: 'https://github.com/DanielGriffiths1182/javascript-codewars-archive',
        description: '40 Javascript exercises and tests',
        mainSkill: 'Javascript',
        url: 'url("../../assets/repos/js.png")'
      },
      {
        id: 5,
        name: 'Java Movie Application',
        skills: ['Java', 'Spring Boot', 'HTML', 'CSS'],
        link: 'https://github.com/DanielGriffiths1182/java-movie-application',
        description: 'With RESTful and full CRUD, a mini-application using Javas Spring Boot MVC',
        mainSkill: 'Java',
        url: 'url("../../assets/repos/1_oAshb_Imd_kGL8ma5kwexw.png")'
      },{
        id: 6,
        name: 'Code Karma API and Web Platform',
        skills: ['Ruby', 'Rails', 'SQL', 'Javascript', 'HTML', 'SCSS', 'AngularJS'],
        link: 'https://github.com/DanielGriffiths1182/code_karma_api',
        description: 'VISIT: https://samanthasheadavis.github.io/codeKarma/#/ | Robust and scaled minimum viable product',
        mainSkill: 'Rails',
        url: 'url("../../assets/repos/rails_default_application.png")'
      }
    ];
    return {skills, repos};



    // TODO Add Biography, Repository information, Contact information, etc...
  }
}
