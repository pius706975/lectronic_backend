# lectronic_backend_NodeJS
Lectronic is an e-commerce that provides electronic products such as headphone, audio speaker, etc.

##
## Application installation steps
Clone this repository to get all of the source code.
```bash
  git clone git@github.com:pius706975/lectronic_backend-ongoing-.git
  
  # or

  git clone https://github.com/pius706975/lectronic_backend-ongoing-.git
```

Make sure that you're already in main branch.
``` bash
  git checkout main
```

Install npm dependencies in the main folder that contains package.json so that npm will be initiated and all of the dependencies will be installed.
``` bash
  npm install
```

Example of environment variables.
``` bash
  APP_PORT=8080   
  BASE_URL=http://localhost:8080

  # it's up to you what jwt_secret or refresh_token_refresh you want to use. e.g you can use "thisissecrect".
  JWT_SECRET=thisissecrect
  REFRESH_TOKEN_SECRET=thisissecrect
  
  DB_HOST=localhost
  DB_NAME=databasename
  DB_USER=xxxxx
  DB_PASSWORD=xxxx
  DB_PORT=database_port
  
  # you can use your own gmail as mail user and get the application password from gmail to fill mail_pass. 
  MAIL_USER=
  MAIL_PASS=

  # You need to create cloudinary account first to get name, api_key, and api_secret
  CLOUDINARY_NAME=
  CLOUDINARY_KEY=
  CLOUDINARY_SECRET=

  # You can upload default picture in cloudinary first and get the link that will be used as default user picture and default product picture.
  DEFAULT_PICTURE=
  DEFAULT_PRODPIC=
```

##
## How to run this application?
Before execute database migration and seeds, check "config.json" in "src/database/config/config.json".
``` bash
  # You need to re-configure according your db configuration values
  {
    "development": {
      "username": "",
      "password": "",
      "database": "",
      "host": "",
      "dialect": ""
    },
    "test": {
      "username": "",
      "password": "",
      "database": "",
      "host": "",
      "dialect": ""
    },
    "production": {
      "username": "",
      "password": "",
      "database": "",
      "host": "",
      "dialect": ""
    }
  }

``` 

If re-configure "config.json" is done, do database migration after creating data in postgreSQL.
``` bash
  # to create all tables
  npm run migrate:up

  # to drop all tables
  npm run migrate:down
```

Database seeds are provided. Use seeds if you don't want to create new data
``` bash
  npm run seed:up
```

Start the server
``` bash
  npm start
  
  # or

  npm run dev
```
