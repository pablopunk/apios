# apios

<p align="center">
  <a href="https://travis-ci.org/pablopunk/apios"><img src="https://img.shields.io/travis/pablopunk/apios.svg" /> </a>
  <a href="https://github.com/pablopunk/miny"><img src="https://img.shields.io/badge/made_with-miny-1eced8.svg" /> </a>
  <a href="https://www.npmjs.com/package/apios"><img src="https://img.shields.io/npm/dt/apios.svg" /></a>
</p>

<p align="center">
  <i>Automatic API for mongo</i>
</p>


## Introduction

*Apios* is a web server that automatically exposes an API for a mongodb database. *If you have a database, you have an API*.


## Usage

First, clone this repo:

```bash
$ git clone https://github.com/pablopunk/apios
$ cd apios
$ npm install
```

Then enter the paramenters of your database inside a `.env` file:

```
# .env
DB_URL=mongodb://my-url.com:1234/db-name
DB_NAME=db-name
DB_USER=pablo
DB_PASS=pass42
```

That's it. Now run the server:

```bash
$ npm start
```

Now go to http://localhost:3000 and you'll see a list of your database collections.

If you want to retrieve an specific collection, use the name of the collection after the URL: http://localhost:3000/animals

>More coming soon...

## License

MIT


## Author

| ![me](https://gravatar.com/avatar/fa50aeff0ddd6e63273a068b04353d9d?size=100)           |
| --------------------------------- |
| [Pablo Varela](https://pablo.life)   |

