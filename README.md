[![Build Status](https://travis-ci.org/elliotjreed/webpack-3-boilerplate.svg)](https://travis-ci.org/elliotjreed/webpack-3-boilerplate) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) 

# WebPack Starter Boilerplate

## Setup

To install initial NPM packages run:

```
npm install
```

## Development Server

Start the WebPack development server:

```
npm run start
```

Go to http://localhost:8080/ to view the development application. Any edits to SCSS or JS will automatically reload.


## Building

To build the application run:

```
npm run build
```

This will install the production-ready files in the `dist` directory.

To locally run the built application run:

```
npm run server
```

Go to http://localhost:8080/ to view the production application.


## Testing

The Jasmine tests will run on a headless Chromium browser which will be installed automatically when installing the dependencies. This allows ES6 to be used and tested.

To run the Jasmine tests:

```
npm run test
```


## Standards

We are using [Standard JS](https://standardjs.com/) as the Javascript coding standard.

ES6 is used throughout. The ES6 will be transpiled to ES5 in production.

To run code sniffer on the JS files:

```
npm run lint
```
