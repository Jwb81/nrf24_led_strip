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

    // turn off the RGB LED
    if (system == 2) {
        ledRed.digitalWrite(1); // Turn RED LED off
        ledGreen.digitalWrite(1); // Turn GREEN LED off
        ledBlue.digitalWrite(1); // Turn BLUE LED off


    }

    // exit completely
    process.exit(0);

});
