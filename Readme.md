# Rick and Morty app - by Paula Salamone Lacunza

## AWS:
http://54.232.138.141/

## Clone the app:
```
git clone https://github.com/paulasl92/HAUFE/
```

Go to HAUFE
```
cd HAUFE
```

## Install

There are 2 folders and 2 files:

-api folder: the backend app (will run on port 9000)
-client: the frontend app (will run on port 3000)
-docker-compose.yml: docker config
-test.postman_collection.json: you can import the colection in postman to test the backend api

Install and run the app using docker:
- 1- Change the API_DATABASE_HOST variable in /app/.env to use mongo:
- API_DATABASE_HOST = "mongodb://mongo/my_database";
- 2- Run: 
```
sudo docker-compose up --build
```

Install and run the app using npm
1- In client folder run:
```
npm install
npm start
```

2- In app folder run
```
npm install
npm start
```

Dont change the API_DATABASE_HOST for using npm:
API_DATABASE_HOST = "mongodb://127.0.0.1/my_database";


## Technologies

- Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers.
- Jsonwebtoken allows you to transmit information securely between two parties as a JSON object.
- Mongoose is an Object Data Modelling (ODM) library for Node.js and MongoDB.
- Bcrpytjs is a password hashing function.
- Express is a Node.js framework with a slightly simpler interface for building back ends.
- Redux is a predictable state management container for JavaScript apps.
- Axios is a JavaScript library used to make HTTP requests from Node.js.
- Redux-thunk is a middleware that allows you to return functions in actions-creators instead of returning an action.
- React-router-dom allows your application to route to different components.
- TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.
- Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). 
- React spinner: https://www.npmjs.com/package/react-loader-spinner
- React Paginate: https://www.npmjs.com/package/react-paginate
- polyfill: compatibility for ie
- Jest — Jest is used by Facebook to test all JavaScript code including React applications.
- Babel-jest — setup to use all ES6 features and React specific syntax.
- Enzyme — Enzyme is a JavaScript testing utility for React that makes it easier to assert, manipulate, and traverse your React Components’ output.
- Enzyme-to-json — convert the Enzyme wrapper to format compatibility with Jest.
- Nock — allows you to mock objects in your test files.
- Redux-mock-store — used to mock our Redux store.
- enzyme-adapter-react-16: Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output.
