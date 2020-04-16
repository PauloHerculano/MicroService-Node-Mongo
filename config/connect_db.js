const mongoose = require('mongoose');
var express = require('express');

mongoose
  .connect(
    'mongodb://paulo:paulo@172.21.39.44:27017/mongo',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

  module.exports = mongoose;
