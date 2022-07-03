# RentingCarz Development Test from VictorVargas

#### Required solution was thought of as follows: The frontend consumes the API created in the backend. The backend consumes the api from https://www.football-data.org. Upon receiving the data, these are saved in the database and then sent to the frontend 

<br>

#### The backend was developed NodeJS using the NestJS framework. This is because NestJS allows you to work more orderly using typescript and applying concepts such as interfaces, services, events, orm, and controllers.

<br><hr>


## Installation

#### Is necessary to have nodejs and yarn or npm installed
#### NestJS Framework:

```sh
npm i -g @nestjs/cli
npm i axios
npm i --save @nestjs/config
npm i --save @nestjs/axios

```


## Deploy Testing Environment using Docker

```sh
./build-app.sh
docker-compose up -d
```

### Access to link http://localhost:3300 for reactapp frontend

### API matches endpoint http://localhost:4400/matches/next-dates
<br>

## Data Flow description:

#### The frontend makes a request to the API and then the API directly consumes the Football API.
Once the data is received, it is sent directly to the Frontend, but an event emitter is executed that works in parallel and this event saves the information in the database, ensuring that the IDs are not repeated, and not blocking the communication between the API and the frontend.

## Updates (Not done due to lack of time):

#### Frontend: It is necessary to add a loader during the waiting time between the request to the API and its response. It would also be an improvement to implement a paginator (it requires updating the API with it)

<br>

#### Backend: Although saving data by events does not block the API for requests from the Frontend, these processes are executed in a single thread. Therefore, a considerable improvement could be to make the API in golang and it is capable of using multiple processor cores (goruntines). Or it is also possible to implement Apache Kafka and develop a new app that listens to kafka events and saves the information in the database.

<br><hr>

## Running Development Environment
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

