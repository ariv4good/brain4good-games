# Game Plan
* N-Queen's Puzzle Game
    * Intial version
        * Track pieces placed on board in tiles array
        * OnTileClick
            * Tile not empty - Game over
            * Tile empty
                * Place Queen
                    * Conflicts with another queen
                        * Highlight in Red - Game over
                    * No conflict with another queen
                        * OnTileClick again or OnSubmitClick
        * OnSubmitClick
            * Track time taken for first click
            * Track squares clicked
            * Track time taken for each click
            * Track time taken to click submit button
            * Generate above data as JSON
    * Github setups
        * Make sure you have full permission in local account
        * Start raising issues instead of filling up README.md
        * Get a proper github license
    * Integrate with mock interview
        * Redirect to N-Queen's puzzle from mock interview
        * Send data generated when redirecting back to mock interview
    * moblie responsiveness
    * Upgrade to N-Piece puzzle game
        * Other piece's possible moves computation
    * Move images from png to svg
* Risk Chess Domination Game
    * Actual chessboard
    * All chess pieces with same points as in chess
    * No. of colors = no. of players
    * Deploy troops in your tiles with points
        * Points will be based on
            * 1x1x1 point for 1x1 tiles conquered
            * 2x2x2 point for 2x2 tiles conquered
            * 3x3x3 point for 3x3 tiles conquered
    * Attack to convert other tiles to your tiles
    * Fortify move one piece within your tiles for defence

# Development Best Practices
* Goal - Easy team work
* Proper git usage
* Git license - code by others - rights
* Proper documentation - Less learning curve for newbie
    * comment all known things
    * get more knowledge in unknown things
    * Do actual react documentation
* Proper MVC
    * images folder
* Cleanup the project - there shouldn't be any unecessary things in project
    * Public folder
    * Root folder

# Performance optimization
* Use Hooks effectively - Add useState in combo with useEffect in BoardComp.tsx
* https://www.pluralsight.com/guides/pros-and-cons-of-client-side-routing-with-react
* React features for software development lifecycle

# MVC
* Currently being used
    * components
        * board
        * tile
        * piece
    * models
        * board
        * tile
        * piece
    * services
        * board
        * tile
        * piece
* Alternative 
    * board
        * components
        * models
        * services
    * tile
        * components
        * models
        * services
    * piece
        * components
        * models
        * services

Solid principles
* Single responsiblity
    * A class should have one and only one reason to change - a class should have only one job.
* Open closed
    * Open for extension but closed for modification
* Liskov substitution
* Interface segregation
    * A client should never be forced to implement an interface that it doesn’t use, or clients shouldn’t be forced to depend on methods they do not use.
    * API designs
* Dependency inversion
    * Passing data between objects without creating much dependencies
    * Spring - BeanFactory, ApplicationContext
    * AppCtx - Map<string, Object>
    * Inject object to AppCtx after initialization
    * Retrieve object from AppCtx for usage outside scope of creation
    * Clear object from AppCtx once it is known to be not reused in further code or logic
    * React Hooks - useState is similar to AppCtx in Spring
* https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design

# drawings
* merging the drawing API code and the rest (integration): similar
* ease of use:
    * (with library) canvas = webGL
    * (from scratch) webGL << canvas
* speed: webGL > canvas
* capabilities: webGL > canvas
* cost: webGL is much more expensive
* platform: very similar

Convert Images to Canvas2D drawings
* https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial

Replace Canvas2D drawings with WebGL canvas drawings
* https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Git repo links
* https://github.com/danielholmes/coc-base-analyser
* https://github.com/Statscell/clash-assets
* https://github.com/MJ-Shashank/clashofclans-events
* https://github.com/jithurjacob/Clash-Of-Clans---TrophyDropBot
* https://github.com/YunYouJun/coc