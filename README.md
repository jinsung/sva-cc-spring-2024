# Creative Computing

- Spring, 2024
- Instructor: Jin Sung Yoo - <ujinsung@gmail.com>
- Time: Thursday, 6:30 PM - 9:20 PM
- Location: 209 E 23 St, 210 Studio

## DESCRIPTION

Building on the foundational knowledge gained in the first course, this second course will focus on programming techniques for generative design and digital interactions. The class will introduce mathematical principles that underlie our physical world to create natural simulation in the digital world. Additionally, we will examine various emerging techniques to understand how technologies create innovation in computer and human interactions.

## RESOURCES

- [P5.JS Reference](https://p5js.org/reference/)
- [Nature of Code](https://natureofcode.com/)
- [CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
- [JS: The Definitive Guide](https://www.amazon.com/JavaScript-Definitive-Most-Used-Programming-Language/dp/1491952024)
- [Working with Data and APIs from Dan Shiffman](https://www.youtube.com/watch?v=DbcLg8nRWEg&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X)
- [ES6 & Beyond](https://github.com/getify/You-Dont-Know-JS/tree/1st-ed/es6%20%26%20beyond)

## COURSE REQUIREMENTS

- Attendance and class participation - 30%
- Assignments - 40%
- Final - 30%

## TOOLS

- [Visual Studio Code](https://code.visualstudio.com/)
- Terminal
- [Github](https://github.com/)
- [P5JS Editor](https://editor.p5js.org/)
- [Node.js](https://nodejs.org/en)

## SYLLABUS

### Week 1 -- New Tools

- Inspiration Sharing
- Code editor
  - VS Code
  - extensions: live preview, p5.vscode
  - Settings
    - disable : Editor:Accept suggestion on commit character
- Terminal
  - /Applications/Utilities/Terminal
  - cd, ls, mv, mkdir, pwd, clear, cp, and open
  - tab for autoComplite
  - up down arrow keys for your command history
- Version control
  - What is version control?
    - Tracking changes
    - Collaboration
    - Restoring previous work
  - Git
    - [Setup](https://docs.github.com/en/get-started/quickstart/set-up-git)
      - [Download](https://git-scm.com/downloads)
      - git config --global user.email "YOUR_EMAIL"
      - git init, git add, git commit, git status, git log, git remote, git pull, and git push
  - Github
    - Signup on github.com
    - Create a new repository
  - Git workflow
    - Clon, Commit, Push, Pull, and Pull Request
    - History of changes

### Week 2 -- HTML/CSS basic

- [Aaron Koblin](https://www.aaronkoblin.com/)
- Setup your workspace with the git repository
- HTML Basic
  - Document Object Model
  - script tag
  - HTML canvas & p5.js
- Basic CSS and style tag
  - tag, id, and class selector
  - CSS [reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
  - style override
- P5.js DOM
  - createElement, select, selectAll
  - Events - changed, input, mouse*
  - manipulating HTML elements
  - main and parant
  - Assignment: Create an interactive p5.js background for your webpage

### Week 3 -- Server side programming with WebSocket

- Presenters
  -  Mina's inspo [1](https://www.instagram.com/tim_rodenbroeker/) [2](https://www.instagram.com/seohyo/?hl=en)
  -  Inwoo's [inspo](https://generativetype.com/)
- Node and NPM
  - Install node
  - [What is Node.js](https://nodejs.org/en/about)
    - Javascript [run time environment](https://stackoverflow.com/questions/3710130/what-is-run-time-environment)
  - Server side programming
  - [WebSocket](https://en.wikipedia.org/wiki/WebSocket)

### Week 4 -- ECMAScript6 features 

- [Free APIs](https://free-apis.github.io/#/categories)
- What is JSON?
- Arrow function expression
- Promise, then, async, and await
- More of Array
  - forEach(), sort(), filter(), map() etc.

### Week 5 -- Data Visualization with Citibike data

- Presenters:
  - Joe's [inspo](https://nahuelgerth.de/lab/typelabs)
  - Heesoo's inspo [1](https://experiments.withgoogle.com/) [2](https://www.creativeapplications.net/python/the-case-for-a-small-language-model-generative-ai-and-authorship/)
- [Try/Catch block](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
- [Spread operator](https://fjolt.com/article/javascript-three-dots-spread-operator)
- Data file format (JSON, CSV)
- Citibike Data converter process (optional)
  - citibike [data](https://s3.amazonaws.com/tripdata/index.html)
  - Instruction
    - clone this repository.
    - download a [cvs](https://s3.amazonaws.com/tripdata/index.html) (I downloaded 202311-citibike-tripdata.csv.zip), unzip and add the csv file to ./examples/05/00-data-converter/data
    - open a terminal
    - cd examples/05/00-data-converter
    - npm install
    - node citibike.js
    - (optional) node addBorough.js
- citibike
  - Get a json file (2023-11-06.json or 2023-11-06-borough.json) from ./example/05/data/ to visualize

### Week 6 -- Physics - Vector / Force

- [Robert Hodgin](http://roberthodgin.com/)
- [Robert Hodgin - Vimeo](https://vimeo.com/flight404/)
- [football data api](https://rapidapi.com/api-sports/api/api-football)
- Vector
  - Vector vs Point
  - [Magnitude, Direction, Add, Subtract, Multiply and Divide](https://editor.p5js.org/jinsung/sketches/BJDUbJpa7)
- [Force = Acceleration x Mass](https://editor.p5js.org/jinsung/sketches/K_1gJXsf_)
- [Gravity](https://editor.p5js.org/jinsung/sketches/L7CliUcrQ)
- [Multiple Forces](https://editor.p5js.org/jinsung/sketches/KM9Ksfhn1)
- [Friction](https://editor.p5js.org/jinsung/sketches/9-jH3bINn)

### Week 7 -- Particle System 1

- Presenters: Hee-Jin and
- [Guanyan](https://happycoding.io/tutorials/p5js/)
- Data Viz Assignment Due
- [Angry Particle?](https://editor.p5js.org/jinsung/sketches/B1d8CSJyE)
- [Particle System](https://editor.p5js.org/jinsung/sketches/Gn1YNnTkn)
- [Particle System / Noise](https://editor.p5js.org/jinsung/sketches/4wONJkuBy)
- [Particle System / Repulse](https://editor.p5js.org/jinsung/sketches/VX43gPQuD)
- [Particle System / Pixel Data](https://editor.p5js.org/jinsung/sketches/h-D0R-3-H)

### Week 8 -- Phsics Engine

- Presenters: Roy and Progga
- [Matter.js](https://brm.io/matter-js/)
- Matter.js basics
  - World, Engine, dynamic and staic Bodies
- OOP - Inheritance
- Pinball game
- Physic homework

### Week 9 -- Phsics Engine 2

### Week 10 -- AI/ML Basic

### Week 11 -- AI/ML: TBD

### Week 12 -- AI/ML: TBD

### Week 13 -- 1:1

### Week 14 -- 1:1

### Week 15 -- Final Presentation
