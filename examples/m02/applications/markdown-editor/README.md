# Workflow ReactJS

## What's inside it?

1. Webpack 2;
* Babel;
* React hot loader;
* HTML and CSS generated automatically by webpack;
* Jest for tests and Chai for assertions;
* Storybook to create isolatelly components' stories
* Async/await
* Webpack tree shaking!

## Dependencies:

- Node.js `>=` v6;

## Up and running

- Clone this repository: `git clone git@github.com:fdaciuk/workflow-reactjs.git`;
- Remove `.git` directory;
- Install dependencies: `yarn` (or `npm i`);
- Run `yarn start` (or `npm start`) to develop on `http://localhost:3000`
- Run `yarn build` (or `npm run build`) for production build (files will be generated on `dist` directory)

## Scripts

- `yarn start (or npm start)`: Starts the application
- `yarn test (or npm test)`: Run tests once
- `yarn test:watch (or npm run test:watch)`: Run tests in watch mode
- `yarn build (or npm run build)`: Build project to production
- `yarn storybook (or npm run storybook)`: Run Storybook on 6006 port
- `yarn build-storybook`: Build Storybook to static files
- `yarn update-packages`: Update all packages to the latest version

## License

[MIT](https://github.com/fdaciuk/licenses/blob/master/MIT-LICENSE.md) &copy; Fernando Daciuk
