const express = require('express');
const bp = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex')

const pg = knex({
   client: 'pg',
   connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'kloop12',
      database : 'face-recon'
   }
});


const app = express();
app.use(bp.json());
app.use(cors());

const database = {
   users: [
      {
         id: '123',
         name: 'Jack',
         email: 'jack@jj.com',
         password: 'lalala',
         entries: 0,
         joined: new Date()
      },
      {
         id: '124',
         name: 'Lola',
         email: 'Lola@jj.com',
         password: 'jajaja',
         entries: 0,
         joined: new Date()
      }
   ]
};

app.get('/', (req, res)=>{
   res.send(database.users);
});


app.post('/signIn', (req, res) =>{
   pg.select('email', 'hash').from('login')
       .where('email', '=', req.body.email)
       .then( userData => {
          if (bcrypt.compareSync(req.body.password, userData[0].hash)){
             return pg.select('*').from('users').
                 where('email', '=', req.body.email)
                 .then(user => res.json(user[0]))
                 .catch(err => res.status('400').json('oy-oy-oy-oy'))
          } else {
             res.status('400').json('wrong email or password!')
          }
       })
       .catch(err => res.status('400').json('wrong credentials'));
});

app.post('/register', (req,res)=>{
   const {email, name, password} = req.body;
   const hash = bcrypt.hashSync(password);

   pg.transaction(trx => {
      trx.insert({
         hash: hash,
         email: email
      })
          .into('login')
          .returning('email')
          .then(loginEmail => {
               return trx('users')
                   .returning('*')
                   .insert({
                     email: loginEmail[0],
                     name: name,
                     joined: new Date()})
                   .then(userData => res.json(userData[0]))
          })
          .then(trx.commit)
          .catch(trx.rollback)
      })
       .catch(err => res.status('400').json('no U'));
});

app.get('/profile/:id', (req, res)=>{
   const {id} = req.params;
   pg.select('*')
       .from('users')
       .where({id})
       .then(user => {
          user[0] ? res.json(user[0]) : res.status('404').json('not found');
       })
       .catch(err => res.status('404').json('error'));
});

app.put('/image', (req, res) => {
   const {id} = req.body;
   pg('users')
       .where('id','=', id)
       .increment('entries', 1)
       .returning('entries')
       .then(entries => res.json(entries))
       .catch(err => res.status('400').json("can't increment your entries, sorry."));
});



// // Load hash from your password DB.
// bcrypt.compare("bacon", hash, function(err, res) {
//    // res == true
// });
// bcrypt.compare("veggies", hash, function(err, res) {
//    // res = false
// });

app.listen(3001, ()=>{
   console.log('server started at 3001 port');
});