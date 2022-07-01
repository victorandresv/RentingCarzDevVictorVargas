#!/bin/bash

cd apirest
yarn install
yarn run build
cp -r node_modules/ dist/node_modules/