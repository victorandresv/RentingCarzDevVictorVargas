# RentingCarz Development Test from VictorVargas

#### Required solution was thought of as follows: The frontend consumes the API created in the backend. The backend consumes the api from https://www.football-data.org. Upon receiving the data, these are saved in the database and then sent to the frontend 

<br>

#### The backend was developed NodeJS using the NestJS framework. This is because NestJS allows you to work more orderly using typescript and applying concepts such as interfaces, services, and controllers.

<br><hr>


## Development Environment

### Installation

#### Is necessary to have nodejs and yarn or npm installed
#### NestJS Framework:

```sh
npm i -g @nestjs/cli
npm i axios
npm i --save @nestjs/config
npm i --save @nestjs/axios

```

### Running Development Environment
#### Run API:
```sh
cd apirest/
yarn install
yarn run start:dev
```
#### Run Frontend:
```sh
cd matches/
yarn install
yarn start
```
<br><hr>

### Deploy Testing Environment using Docker

```sh
./build-app.sh
docker-compose up -d
```

### Access to link http://localhost:3300 for reactapp frontend

### API matches endpoint http://localhost:4400/matches/next-dates