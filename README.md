# Princeton E-club Applicant Portal

This is the source for the E-club applicant portal.

## Dependencies
You must have node installed, but this project uses yarn.
For more information on how to install yarn, see 
[here](https://yarnpkg.com/lang/en/docs/install/).

## Setup
Clone locally with git
```
git clone git@github.com:princetoneclub/app-portal.git
```
Install your dependences with yarn (including client dependencies).
```
yarn install
cd client && yarn install
```
*Do not* use `npm install`, as this will create a package-json.lock
file which is not compatible with yarn.lock.

## Development
To test, the server and client can be run separately, but if so each
command ideally should be run in separate terminal windows.
```
yarn run server
yarn run client
```

Alternatively, run the client and server together with
```
yarn run dev
```

The client will run on port 3000 and the server will run on port 3001.
Visit the client on http://localhost:3000.

## Production
To run a production build locally, run
```
yarn run prod
```
The built react app will be served by the server on http://localhost:3001/.

## CAS
This app is authenticated with CAS.  The CAS details are located in
/server/config/cas.js, and this is where development mode can be turned on
or off.  In development mode, a mock user called "tester" is used and all
endpoints will be authenticated with this mock user.  To test production,
set `is_dev_mode` to false, then use `yarn run prod` to run in production.
This will use real CAS and allow real users to log in.
