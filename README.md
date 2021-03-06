# 🌱 apios

<p align="center">
  <a href="https://travis-ci.org/pablopunk/apios"><img src="https://img.shields.io/travis/pablopunk/apios.svg" /> </a>
  <a href="https://github.com/pablopunk/miny"><img src="https://img.shields.io/badge/made_with-miny-1eced8.svg" /> </a>
</p>

<p align="center">
  <img src="https://github.com/pablopunk/art/raw/master/apios/apios-page.png" alt="Header" />
</p>


## Introduction

*Apios* is a web server that automatically exposes an API for a mongodb database. *If you have a database, you have an API*.

<p align="center">
  <img src="https://github.com/pablopunk/art/raw/master/apios/apios.png" alt="Schema" />
</p>


## Usage

First, clone this repo ([or use now.sh](#deploy))

```bash
$ git clone https://github.com/pablopunk/apios
$ cd apios
$ npm install
```

Then enter the paramenters of your database inside a `.env` file:

```sh
# .env
DB_URL=mongodb://my-url.com:1234/db-name
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


## Deploy

I personally use [now.sh](http://now.sh) to deploy this as it's super easy, fast and secure:

```bash
$ now -e DB_URL=mongodb://.../dbName -e DB_USER=you -e DB_PASS=1234
```


## Related

* *WIP*. Rust implementation of this repo: [rust-apios](https://github.com/pablopunk/rust-apios)


## License

MIT


## Author

| ![me](https://gravatar.com/avatar/fa50aeff0ddd6e63273a068b04353d9d?size=100)           |
| --------------------------------- |
| [Pablo Varela](https://pablo.life)   |

