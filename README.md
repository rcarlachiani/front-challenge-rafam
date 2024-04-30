# Challenge Frontend - Ministerio de Economía PBA

## Dependencies
 - Node
 - NPM

## Instructions
 - Clone Repo
 - cd to project folder
 - Install Node and NPM using NVM - v12.20.0 or v13.14.0 only
 - npm install 
 - cp .env.example .env

## SO Windows
 - Edit package.json section "scripts"."start" with:
 `"start": "react-scripts start",`
 - Edit manually `src/environment.js`. Dont use `window._env_.REACT_APP_PRODUCTION`

## Dev Run 
 - npm run start
 - Access https://localhost:3000

## Prod Build
 - npm run build 

## Run test with Jest
 - npm test