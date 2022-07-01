#!/bin/bash

# Build API
cd apirest
rm -rf dist
yarn install
yarn run build
cp -r node_modules/ dist/node_modules/

# Build Frontend
cd ..
cd matches
rm -rf build
yarn install
yarn run build
