const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  sobrenome: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    required: true
  },
  tel: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
   produto: {
    type: String,
    required: true
  }
});

module.exports = Item = mongoose.model('item', ItemSchema);
