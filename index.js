const express = require('./config/server');
const rotaHome = require('./app/routes/home')(express);
const rotaUsers = require('./app/routes/users')(express);
const mongo = require('./config/connect_db');

express.post('/item/add', (req, res) => {
  const newItem = new Item({
    nome: req.body.nome,
    sobrenome: req.body.sobrenome,
    cpf: req.body.cpf,
    tel: req.body.tel,
    produto: req.body.prod
  });

  newItem.save().then(item => res.redirect('/'));
});

express.listen(8080, () => console.log('Server running...'));
