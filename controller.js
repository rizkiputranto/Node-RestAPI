'use strict';

var response = require('./res');
var connection = require('./connection');

exports.index = function (req, res) {
    response.ok('Rest API status running', res);
};

//Mengambil Data Mahasiswa dari Database
exports.tampilMahasiswa = function (req, res) {
    connection.query('SELECT * FROM mahasiswa', function (error, rows, fields) {
        if (error) {
            connection.log('error');
        } else {
            response.ok(rows, res);
        }
    });
}