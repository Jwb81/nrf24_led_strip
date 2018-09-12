var express = require('express')
// const MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser')
var app = express()
var http = require('http').Server(app)
// var io = require('socket.io')(http)
var fs = require('fs')
var nrf24 = require('nrf24');





/*
    VARIABLES


*/

// Radio pipe addresses for the 2 nodes to communicate.
const pipes = [ "0xABCDABCD71LL", "0x544d52687CLL" ];              

var rf24 = new nrf24.radio(5, 0, nrf24.BCM2835_SPI_SPEED_8MHZ);
rf24.begin();

// configure the radio
rf24.config({
    PALevel: nrf24.RF24_PA_LOW,
    DataRate: nrf24.RF24_1MBPS
});

// register reading pipes
var pip = rf24.addReadPipe(pipes[0], true);   // 'true' sets autoAck to yes

rf24.read( function(data, pipe) {
    console.log("data: " + data + "\npipe: " + pipe + "\n");
}, function(isStopped, by_user, error_count) {
    // runs if the listening process is stoppped

    console.log(isStopped);
    console.log(by_user);
    console.log(error_count);
})



// sending data over the radio
var counter = 0;
var data = Buffer.from(counter);
rf24.useWritePipe(pipes[1]);
rf24.write(data);








/* 

    Startup Procedures

*/
app.use(express.static(__dirname));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))




var server = http.listen(1000, () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log('The bartender is listening on port %s', port);
})



// catch ctrl+c event
process.on('SIGINT', function () {

    // exit completely
    process.exit(0);

});
