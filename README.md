# HypeRelease
- An app using a webscraper to build a custom API for Yeezy shoe release data

## Objectives

### We are building a front end app to connect to our web scraper we built earlier today and our deployed API

- [x] Wipe out all create-react-app garbage I dont need
- [x] Build components for the page
  - [x] Header
  - [x] Body/Main
  - [x] Container for shoe data
- [x] Style components using bootswatch
- [x] Fetch request for API data
- [x] Render data
- [x] Sort data by release date (wasnt needed, object came in that way - tis rare!!!)

## TODAYS OBJECTIVES 7/11/2018

### Set up layout for additional items/brands
- [x] React Router
  - [x] npm install react-router-dom
  - [x] setup Routes
- [x] Restyle landing to display all
  - [x] buttons for Router
  - [x] section for display all

- [x] Scrape new shoe data
- [x] Bring in new data to frontend

... Saving for new scraped data, likely new date formats we'll need to normalize b/t data sets

- [x] Display all...
- [] sorted by month of release/date of Release

## TONIGHT's REFACTOR OBJECTIVE

### Refactor wherever it needs it!

- [x] Leverage state in App.js and pass props to Yeez or Jordan
  - [x] Set up ShowAll, Yeezy and Jordan as components in App.js
  - [x] move jordan api fetch to the App.js methods
  - [x] pass state as props to those components
- [-] Build NavBar components
  - [-] Home (showall)
  - [-] Releases
  - [-] Contact
  - [-] About
- [x] Nav bar background color ?!?!? bootswatch
- [x] Fix text-shadow in card text
- [x] Link to StockX
- [-] Card header should be unique color!
- [-] Logos for buttons in Hero (JORDAN, ADIDAS)
- [x] Import JS for bootstrap
  - [x] verify that JS is working, ex. hamburger menu in mobile view...


### Remaining fixes...
- [x] import custom favicon
- [x] research PWA icons [default to favicon????]
- [x] Add image icon instead of header text
- [x] Contact form
- [x] preload anything???
- [x] asset reduction? lighthouse/canary test?
- [x] manifest files for PWA

- [] Contact form in react (Kevin, Beerman)
- [] Cross-browser compatibility (LuLz)
- [] google calendar / iCal integration for each Release *   dates arent complete =(
- [] normalize Date data
  - [] render all sorted by date
- [] Improve maxres photo type to JPEG 2000
