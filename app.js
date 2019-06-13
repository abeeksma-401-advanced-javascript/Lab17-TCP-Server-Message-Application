'use strict';
const net = require('net');
const uuid = require('uuid');

const port = process.env.PORT || 3000;
const server = net.createServer();

const alterFile = require('./alterFiles/read-write');



let file = process.argv.slice(2).shift();

alterFile(file);
