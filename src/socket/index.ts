import { port } from "../config";

const net = require('net');

const client = new net.Socket();

client.connect(port, host, () => {
  console.log('Connected to server');
});

client.on('data', data => {
  console.log('Received from server: ' + data);
});

client.on('close', () => {
  console.log('Connection closed');
});