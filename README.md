# README

# Rails - React - devise_token_auth - template
- A nice starting point for your next app, preconfigured template with devise_token_auth user accounts, deployment configs, and various other boilerplate pre setup.  MIT License.
- link to demo heroku app: https://calm-citadel-54256.herokuapp.com/ 
# About

* Ruby version 2.7.0
* React version 16.12.0
* devise_token_auth version 1.1.3
* Axios version 0.19.2
* Postgres version 1.2.2

# Configuration
#### Backend
- $ rvm install 2.7.0 or rbenv install 2.7.0
- $ rvm use 2.7.0 or rbenv local 2.7.0
- $ bundle install
- $ rails db:create
- $ rails db:migrate
#### Frontend
- $ cd client 
- $ yarn
- $ cd ..

#### Starting the dev server
###### if you dont have foreman installed run: $ gem install foreman
- $ foreman start -f Procfile.dev
###### If foreman exits without killing ports 3000/3001 run: $ lsof -ti:3000 | xargs kill

# Deployment instructions
#### (For Heroku)
###### if you dont have heroku cli installed run: $ npm install -g heroku
- $ heroku login
- $ heroku apps:create


- $ heroku buildpacks:add heroku/nodejs --index 1
- $ heroku buildpacks:add heroku/ruby --index 2


- $ git init
- $ git add .
- $ git commit -m "commit changes before deployment"
- $ git push heroku master
- $ heroku run rake db:migrate
- --> visit your deployed app :)



