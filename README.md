# Project Title

Chuck Norris Jokes App - Version 1.0.0

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

These are the instruction for preparring the dev enviroment

Clone this repository:

```
git clone https://nahueldaima@bitbucket.org/shiftmetrics/chuck-norris-joke-app.git
```

Run the command

```
npm install package.json
```

If you don't have Vue CLI 3, then run:

```
npm install -g @vue/cli
```

To start the application run:

```
npm run serve
```

## Deployment

To host this application you will need some server or service that serve your files.

In order to build your production app run:

```
npm run build
```

You will find a new 'dist' folder on your project folder. Inside of it you will find your app prepared to be upload as a website.
Upload the content to your hosting.

## Testing

This proyect has Unit testing implemented with Mocha and Chai

In order to run the test do:

```
npm run test:unit
```

## Built With

- [Vue CLI](https://cli.vuejs.org/) - The web framework used
- [Vuex](https://vuex.vuejs.org/) - State Management Library
- [Axios](https://github.com/axios/axios) - HTTP Promises Library
- [Babel](https://vuex.vuejs.org/) - State Management Library
- [Vuelidate](https://github.com/vuelidate/vuelidate) - Form Validation for Vue

Vue CLI Pluggins:

- [Vuetify](https://www.npmjs.com/package/vue-cli-plugin-vuetify) - Material Design Component Framework
- [Babel](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel) - Material Design Component Framework
- [eslint](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint) - Material Design Component Framework
- [mocha](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha) - Unit Mocha Plugin for Vue

## Authors

- **Nahuel Daima** - _Chuck Norris Jokes App_

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
