# UserInterface
Artfolio Landing Page

## Deployment
View the live project at https://artfolio-landing.netlify.com/

## Team Members
* Jeffrey Kang - SCRUM Master
    * <a href="https://github.com/jeffyjkang" target="_blank">Github</a>

* Joshua Gonzalez - Front-End Engineer
    * <a href="https://github.com/CatsAreMLG" target="_blank">Github</a>
* Jorge Osto - Back-End Engineer
    * <a href="https://github.com/Jorlost19" target="_blank">Github</a>
* Louis Magdaleno - User Interface Developer
    * <a href="https://github.com/louismagdaleno" target="_blank">Github</a>

## Project Overview
* <a href="https://www.notion.so/Part-Time-Build-Weeks-38860a0c39b641f483639b78a1e4094f">Part Time Build Weeks</a>

## User Interface Developer Role Guide

You will build a multi-page marketing website that matches the theme chosen by your group and provides the user with details about the product your team has selected to build. Your marketing website must include responsive mobile and desktop screen widths. The call to action on the website should be a login button that links the user over to the React application that your Front End Architect is building. Your marketing website must be hosted.

For this Marketing site's home page you need to have content and copy that relates to the product that your team is working on. Descriptions about the product and about the features it provides would be key. For a second page, you could do an about us section that includes images of the members of your team, and links to one another's socials/Github.


## Grading Rubric
1. Student's work demonstrates that all MVP features were built and the student went above and beyond the project.
    * The landing page meets MVP requirements by describing the app, features, introducing the dev team, linking to the react app, and looks great on desktop and mobile views. The website is also hosted on <a href="https://www.netlify.com/">Netlify</a>.
2. Pair programmed with the Front End Architect.
    * Teamed with the Front End Architect to correct styling issues, update copy, and received guidance on site design.
3. Student's code is clean and organized, proper indentation is apparent, a library or framework was researched and used. 
    * Code is clean, well formatted, organized, and indented properly.  <a href="https://github.com/prettier/prettier">Prettier</a> was used to format JS and <a href="https://www.freeformatter.com/html-formatter.html">FreeFormatter</a> was used to format site markup.
4. Tablet views look professional at 800px and above. Responsive units are used for font-sizing.
    * The site looks great at all resolutions. Breakpoints are handled through Javascript in `.assets/js/main.js`.
    ```
        Line 12 :
        breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});
    ```
5. Any of the following were used: .map(), .reduce(), .filter(), .sort(), constructors were used to build new objedects.
    * In `./assets/js/about_us.js`, map is used to create new instances of an object. `Line 51 - const about_tabs = Array.from(about_us_tabs).map(node => new AboutTab(node));`
6. A reusable component was built.  The component should be able to take any number of elements and continue to work well.  Example: Accordion with any amount of panels.
    * A Tab Component was built and can be reused. The Tab Component features a select method which will select other elments on the page with the same data attribute as its own.
## Project
```

root
|
|----index.html
|
|----README.md
|
|----assets
|       |
|       |----css (styling shets)
|       |
|       |----fonts (fontawesome dependencies)
|       |
|       |----js (jquery and js)
|
|----images (various images used on the site)
```

## Stretch
Implemented a click event handler for the form button that gathers input field data, packages it in JSON, and sends it to our `messages` endpoint.
`assets/js/message.js`

## How to Run
1. Download / clone project to your computer.
2. Open the index.html file within a browser of your choice.


