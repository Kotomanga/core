#!/bin/bash
cd src/ether/token
truffle build
truffle migrate
truffle test
cd ../../..
