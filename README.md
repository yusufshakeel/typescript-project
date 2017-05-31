# typescript-project
This is a sample TypeScript project.


#Setup

Install node and npm.

Install typescript globally via npm.
`npm install -g typescript`

Install lite-server to serve files.
`npm install lite-server --save-dev`

Add start to package.json
`"scripts": {
    "start": "lite-server"
  }`

Put the project folder under typescript watch.
`tsc --init`

To start lite-server (open a new terminal)
`npm start`

To stop lite-server
`Ctrl+C`

To compile typescript files type the following command (in new terminal).
`tsc`