# Rails, React & devise_token_auth -- template
Not actively maintained

- A nice starting point for your next app, preconfigured starter app with devise_token_auth setup for user accounts, deployment configuration for heroku, and various other boilerplate.  MIT License.
- link to demo heroku app: https://calm-citadel-54256.herokuapp.com/ 

# Config
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



