'use strict';

var response = require('./res');
var connection = require('./connection');

exports.index = function (req, res) {
    response.ok('Rest API status running', res);
};

//Menampilkan semua data mahasiswa dari Database
exports.tampilMahasiswa = function (req, res) {
    connection.query('SELECT * FROM mahasiswa', function (error, rows, fields) {
        if (error) {
            connection.log('error');
        } else {
            response.ok(rows, res);
        }
    });
}

//Menampilkan data mahasiswa by ID
exports.tampilById = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log('error');
            } else {
                response.ok(rows, res);
            }
        });
}