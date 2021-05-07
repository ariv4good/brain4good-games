# Brain4Good Games
* Strategic board games with online multiplayer theme like pubg - voice call

# Games in development
* Brain4Good ChessGames
* COC theme
* Brain4RiskGame
* Brain4TicTacToeGame
* Ariv4Dhaayam

# Learning curve for new developers
* Git
    * process for deveopment, code review, release
    * explained in detail below
* IDE or text editor
    * get familiar with an IDE or a text editor
    * command prompt, refactoring renames
    * recommended - Visual Studio Code
* Coding
    * follow README.md and documention
    * no need for any extra learning

# Best Practises
* Follow [Software development lifecycle](#software-development-lifecycle) - good team work
* Data structures - efficient memory usage
* Algorithms - efficient logics
* Reduce Build size - less data consumption
* Lazy Loading - quick loading

# Software development lifecycle
* Coding
* Unit testing
* Code review
* Unit testing review
* Deploy to test server
* Integration testing
* Integration testing review
* Deploy to production server

# MVC
* components - UI or Presentation Layer
* models - Data designs
* services - Data layer and tightly coupled logic
* helpers - Loosely coupled logic - Seperate layer that can be be called from any other layer
* utils - Standard logics useful for any app - try to move to utils project, generate npm package and import

# Git branch maintenance for one by one slow feature releases
* Prod branch - production
    1. Approve pull request
    2. Merge pull request to prod branch
        * Generate production build
        * Deploy build to production server
* Test branch - integration testing
    1. Approve or reject pull request
        * Check unit test results
        * Review test code changes
    2. Merge pull request to test branch if approved
    3. Raise pull request to merge with prod branch
        * Generate test build
        * Deploy build to test server
        * Run integration test cases (Seperate project)
* Dev branch - code review
    1. Review code changes in pull request
    2. Approve or reject pull request
    3. Merge pull request to dev branch if approved
    4. Raise pull request to merge with test branch
* Feature branches - development
    1. Create a new branch from dev branch
        * name should be relavent to task and ticket id
    2. Stage the changes
        * Independent of future code changes
        * Code to be reviewed
        * Unit test code changes should also be present
    3. Commit the changes
        * Commit message should be simple - one liner
        * Explain why your code changes is needed - few words
        * Explain how your code changes will work - few words
    4. Push the commit
    5. Repeat steps 2 to 4 till task is completed
    6. Raise a pull request to merge with dev branch
        * Only if task is fully completed
        * Attach unit test results
    7. Repeat steps 2 to 6 till pull request is approved
    8. Delete branch once feature is deployed