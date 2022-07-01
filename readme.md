# RentingCarz Development Test from VictorVargas

## Development Environment

### Installation

#### Is necessary to have nodejs and yarn or npm installed.
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
yarn run start:dev
```


### Running Testing Environment using Docker
```sh
./build-api.sh
docker-compose up -d
```