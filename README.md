# lectronic_backend
##
## Application installation steps
Clone this repository to get all of the source code.
```bash
  git clone git@github.com:pius706975/lectronic_backend-ongoing-.git
```
or
```bash
  git clone git@github.com:pius706975/lectronic_backend-ongoing-.git
```

Make sure that you're already in main branch.
``` bash
  git checkout main
```

Install npm dependencies in the main folder that contains package.json so that npm will be initiated and all of the dependencies will be installed
``` bash
  npm install
```

### example of environment variables.
``` bash
  APP_PORT=8080   
  BASE_URL=http://localhost:8080
  
  JWT_SECRET=it's up to you what jwt_secret you want to use. e.g you can use "thisissecrect".
  REFRESH_TOKEN_SECRET=same as jwt_secret
  
  DB_HOST=localhost
  DB_NAME=databasename
  DB_USER=xxxxx
  DB_PASSWORD=xxxx
  DB_PORT=databaseport
  
  MAIL_USER=you can use your own email
  MAIL_PASS=fill this variable with your email application password. it's provided if you use gmail.

  You need to create cloudinary account first to get name, api_key, and api_secret
  CLOUDINARY_NAME=
  CLOUDINARY_KEY=
  CLOUDINARY_SECRET=

  You can upload default picture in cloudinary first and get the link that will be used as default picture.
  DEFAULT_PICTURE=
  DEFAULT_PRODPIC=
```

##
## How to run this application?
Do database migration after creating data in postgreSQL.
to create all tables
``` bash
  npm run migrate:up
```
to drop all tables
``` bash
  npm run migrate:down
```

Start the server
``` bash
  npm start
```
or
``` bash
  npm run dev
```
