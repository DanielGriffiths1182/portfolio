import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    const skills = [
      {
        id: 1,
        skillName: 'Rails',
        skillLevel: 8,
        description: "Ruby on Rails, or Rails, is a server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller (MVC) framework, providing default structures for a database, a web service, and web pages.",
        stack: 'Back End',
        url: 'url("../../assets/js.jpg")'
      },
      {
        id: 2,
        skillName: 'Ruby',
        skillLevel: 9,
        description: "Ruby is a dynamic, reflective, object-oriented, general-purpose programming language. It was designed and developed in the mid-1990s by Yukihiro Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, Smalltalk, Eiffel, Ada, and Lisp.",
        stack: 'Back End',
        url: 'url("../../assets/ruby.jpg")'
      },
      {
        id: 3,
        skillName: 'Javascript',
        skillLevel: 9,
        description: "JavaScript® (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well. It is a prototype-based, multi-paradigm scripting language that is dynamic, and supports object-oriented, imperative, and functional programming styles.",
        stack: 'Front End',
        url: 'url("../../assets/js.jpg")'
      },
      {
        id: 4,
        skillName: 'Java',
        skillLevel: 4,
        description: "Java is a general-purpose computer-programming language that is concurrent, class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible.",
        stack: 'Back End',
        url: 'url("../../assets/java.jpg")'
      },
      {
        id: 5,
        skillName: 'Python',
        skillLevel: 4,
        description: "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. ... Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which encourages program modularity and code reuse.",
        stack: 'Back End',
        url: 'url("../../assets/python.jpg")'
      },
      {
        id: 6,
        skillName: 'PHP',
        skillLevel: 7,
        description: "PHP (recursive acronym for PHP: Hypertext Preprocessor) is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML.",
        stack: 'Back End',
        url: 'url("../../assets/javascript.jpg")'
      },
      {
        id: 7,
        skillName: 'Laravel',
        skillLevel: 6,
        description: "Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller (MVC) architectural pattern.",
        stack: 'Back End',
        url: 'url("../../assets/javascript.jpg")'
      },
      {
        id: 8,
        skillName: 'HTML',
        skillLevel: 10,
        description: "The <meta> tag provides metadata about the HTML document. ... Meta elements are typically used to specify page description, keywords, author of the document, last modified, and other metadata. The metadata can be used by browsers (how to display content or reload page), search engines (keywords), or other web services.",
        stack: 'Front End',
        url: 'url("../../assets/javascript.jpg")'
      },
      {
        id: 9,
        skillName: 'CSS',
        skillLevel: 10,
        description: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language. CSS is designed primarily to enable the separation of presentation and content, including aspects such as the layout, colors, and fonts.",
        stack: 'Front End',
        url: 'url("../../assets/javascript.jpg")'
      },
      {
        id: 10,
        skillName: 'SQL',
        skillLevel: 9,
        description: "Structured Query Language (SQL) is a standard computer language for relational database management and data manipulation. SQL is used to query, insert, update and modify data.",
        stack: 'Back End',
        url: 'url("../../assets/javascript.jpg")'
      },
      {
        id: 11,
        skillName: 'Git',
        skillLevel: 9,
        description: "Git is a version control system for tracking changes in computer files and coordinating work on those files among multiple people. It is primarily used for source code management in software development, but it can be used to keep track of changes in any set of files.",
        stack: 'Auxillary',
        url: 'url("../../assets/javascript.jpg")'
      },
      {
        id: 12,
        skillName: 'cPanel',
        skillLevel: 3,
        description: "cPanel is an online Linux-based web hosting control panel that provides a graphical interface and automation tools designed to simplify the process of hosting a web site.",
        stack: 'Auxillary',
        url: 'url("../../assets/javascript.jpg")'
      },
      {
        id: 13,
        skillName: 'jQuery',
        skillLevel: 8,
        description: "jQuery is a concise and fast JavaScript library that can be used to simplify event handling, HTML document traversing, Ajax interactions and animation for speedy website development. jQuery simplifies the HTML's client-side scripting, thus simplifying Web 2.0 applications development.",
        stack: 'Front End',
        url: 'url("../../assets/javascript.jpg")'
      },
      {
        id: 14,
        skillName: 'Ajax',
        skillLevel: 7,
        description: "Ajax is a client-side script that communicates to and from a server/database without the need for a postback or a complete page refresh.",
        stack: 'Front End',
        url: 'url("../../assets/javascript.jpg")'
      },
      {
        id: 15,
        skillName: 'AngularJS',
        skillLevel: 9,
        description: "AngularJS (commonly referred to as 'Angular.js' or 'AngularJS 1.X') is a JavaScript-based open-source front-end web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications.",
        stack: 'Front End',
        url: 'url("../../assets/javascript.jpg")'
      },
      {
        id: 16,
        skillName: 'ReactJS',
        skillLevel: 2,
        description: "React allows developers to create large web-applications that use data and can change over time without reloading the page. It aims primarily to provide speed, simplicity, and scalability. React processes only user interfaces in applications. This corresponds to View in the Model-View-Controller (MVC) pattern, and can be used in combination with other JavaScript libraries or frameworks in MVC, such as AngularJS.",
        stack: 'Front End',
        url: 'url("../../assets/javascript.jpg")'
      },
      {
        id: 17,
        skillName: 'AWS',
        skillLevel: 4,
        description: "Amazon Web Services (AWS) is a secure cloud services platform, offering compute power, database storage, content delivery and other functionality to help businesses scale and grow.",
        stack: 'Auxillary',
        url: 'url("../../assets/javascript.jpg")'
      },
      {
        id: 18,
        skillName: 'SCSS',
        skillLevel: 9,
        description: "Sass (Syntactically awesome style sheets) is a style sheet language initially designed by Hampton Catlin and developed by Natalie Weizenbaum. After its initial versions, Weizenbaum and Chris Eppstein have continued to extend Sass with SassScript, a simple scripting language used in Sass files.",
        stack: 'Front End',
        url: 'url("../../assets/javascript.jpg")'
      },
      {
        id: 19,
        skillName: 'CloudFlare',
        skillLevel: 4,
        description: "Cloudflare, Inc. is a U.S. company that provides a content delivery network, DDoS mitigation, Internet security services and distributed domain name server services, sitting between the visitor and the Cloudflare user's hosting provider, acting as a reverse proxy for websites.",
        stack: 'Auxillary',
        url: 'url("../../assets/javascript.jpg")'
      },
      {
        id: 20,
        skillName: 'Wordpress',
        skillLevel: 6,
        description: "Meta description is a brief description of what your page or post is about. Meta keywords and description are actually HTML meta tags, and they go into your website's header. WordPress SEO plugins make it super easy for you to add them from your WordPress admin area for each post and page on your website.",
        stack: 'Auxillary',
        url: 'url("../../assets/javascript.jpg")'
      }
    ];


    const repos = [
      {
        id: 1,
        name: 'Angular Portfolio',
        skills: ['AngularJS', 'Javascript', 'HTML', 'CSS', 'SCSS', 'jQuery', 'Typescript'],
        link: 'https://github.com/DanielGriffiths1182/robust-angularJS-portfolio-site-application',
        description: 'A robust AngularJS platform, building towards new portfolio',
        mainSkill: 'Typescript',
        url: 'url("https://i.ytimg.com/vi/4dlI76-O3lc/maxresdefault.jpg")'
      },{
        id: 2,
        name: 'Ruby Codewars',
        skills: ['Ruby'],
        link: 'https://github.com/DanielGriffiths1182/ruby-codewars-archive',
        description: '87 Ruby exercises and tests',
        mainSkill: 'Ruby',
        url: 'url("https://static1.squarespace.com/static/543593e4e4b0bf8b316933e3/t/55224459e4b0ab9c8e348de9/1428309084880/firstattempt.jpg")'
      },
      {
        id: 3,
        name: 'PHP Codewars',
        skills: ['PHP'],
        link: 'https://github.com/DanielGriffiths1182/php_codewars_archive',
        description: '25 PHP exercises and tests',
        mainSkill: 'PHP',
        url: 'url("http://www.codingdojo.com/blog/wp-content/uploads/71.jpg")'
      },{
        id: 4,
        name: 'Javascript Codewars',
        skills: ['Javascript'],
        link: 'https://github.com/DanielGriffiths1182/javascript-codewars-archive',
        description: '40 Javascript exercises and tests',
        mainSkill: 'Javascript',
        url: 'url("https://i.redd.it/auvi7ijfursy.png")'
      },
      {
        id: 5,
        name: 'Java Movie Application',
        skills: ['Java', 'Spring Boot', 'HTML', 'CSS'],
        link: 'https://github.com/DanielGriffiths1182/java-movie-application',
        description: 'With RESTful and full CRUD, a mini-application using Javas Spring Boot MVC',
        mainSkill: 'Java',
        url: 'url("https://cdn-images-1.medium.com/max/1600/1*3OWWk9BUargTyvFGQpBsOA.png")'
      },{
        id: 6,
        name: 'Code Karma API and Platform',
        skills: ['Ruby', 'Rails', 'SQL', 'Javascript', 'HTML', 'SCSS', 'AngularJS'],
        link: 'https://github.com/DanielGriffiths1182/code_karma_api',
        description: 'Robust and scaled minimum viable product for clients and developers',
        mainSkill: 'Rails',
        url: 'url("https://static1.squarespace.com/static/543593e4e4b0bf8b316933e3/t/5549080ce4b0a842f7a0d2bd/1430849550313/controllercode.jpg")'
      },
      {
        id: 7,
        name: 'Old Portfolio 2.0',
        skills: ['Javascript', 'HTML', 'CSS'],
        link: 'https://github.com/DanielGriffiths1182/old-portfolio-2.0',
        description: 'Portfolio site 2.0, 2017',
        mainSkill: 'CSS',
        url: 'url("http://mrmanion.weebly.com/uploads/6/8/8/7/6887264/2711154_orig.jpg")'
      },{
        id: 8,
        name: 'Rails App, Advanced User/Admin Setup',
        skills: ['Ruby', 'Rails', 'ERB', 'CSS'],
        link: 'https://github.com/DanielGriffiths1182/personal-rails5-application',
        description: 'Practicing advanced user/admin login, setup techniques.',
        mainSkill: 'Rails',
        url: 'url("https://static1.squarespace.com/static/543593e4e4b0bf8b316933e3/t/5549080ce4b0a842f7a0d2bd/1430849550313/controllercode.jpg")'
      },
      {
        id: 9,
        name: 'Python Codewars',
        skills: ['Python'],
        link: 'https://github.com/DanielGriffiths1182/python-codewars-archive',
        description: '28 Python exercises and tests',
        mainSkill: 'Python',
        url: 'url("http://dynamoprimer.com/en/09_Custom-Nodes/images/9-4/Exercise/Python/python07.jpg")'
      },{
        id: 10,
        name: 'Memory Game',
        skills: ['Javascript', 'Ruby', 'Rails', 'Haml', 'CSS'],
        link: 'https://github.com/DanielGriffiths1182/memory_game',
        description: 'Memory Card Game',
        mainSkill: 'Javascript',
        url: 'url("https://i.redd.it/auvi7ijfursy.png")'
      }
    ];
    return {skills, repos};
  }
}
