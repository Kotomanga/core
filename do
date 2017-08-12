#!/bin/bash
npm install ipfs -g
jsipfs init
cd src/ether/token
truffle build
truffle migrate
truffle test
cd ../../..
