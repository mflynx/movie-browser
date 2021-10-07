# Movie Browser

[Movie Browser](https://fervent-roentgen-dea86c.netlify.app/) is a single page movie browsing application made with ReactJs and based on [TMDB](https://www.themoviedb.org/)'s API. 

![movieBrowser-screenshots](https://user-images.githubusercontent.com/75902373/136381173-f6f1a82c-d11f-4bcf-943e-fdd158a82920.png)
## Technologies used

- React
- Axios
- Javascript
- HTML
- CSS

## How to install and launch the project

- Make sure you have `node` and `npm` installed: `node -v` `npm -v`

The numbers printed indicate the version installed, if not download [node](https://nodejs.org/en/).

- Clone this repo and install the dependencies

```
git clone https://github.com/mflynx/movie-browser.git
cd movie-browser
npm install
```

- Create your own API key (needed to make requests to the database) and link it to the project

  - Create an account on https://www.themoviedb.org/

  - Generate an API key (as described [here](https://developers.themoviedb.org/3/getting-started/introduction). Use version 3 of the API as its authentication mechanism is simpler than v4)
  
  - Create a file named `.env` and inside declare this variable:

  ```javascript
  REACT_APP_API_KEY=//paste here your api key
  ```
- You are ready to launch the project !

`npm start` will launch the application in your browser at http://localhost:3000, the page will reload if you make edits. 
