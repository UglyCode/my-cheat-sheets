const express = require('express');
const bp = require('body-parser');
const bcrypt = require('bcrypt-nodejs');

const app = express();
app.use(bp.json());

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
   ],
   login:[{
      id: '899',
      hash: '',
      email: 'jack@jj.com'
   }]
};

app.get('/', (req, res)=>{
   res.send(database.users);
});


app.post('/signIn', (req, res) =>{
   if (req.body.email === database.users[0].email &&
       req.body.password === database.users[0].password){
      res.json('success');
   } else {
      res.status(400).json('invalid credentials');
   }

});

app.post('/register', (req,res)=>{
   const {email, name, password} = req.body;
   bcrypt.hash(password, null, null, function(err, hash) {
      console.log(hash)
   });
   database.users.push({
      id: '125',
      name: name,
      email: email,
      password: password,
      entries: 0,
      joined: new Date()
   });
   res.json(database.users[database.users.length-1]);
});

app.get('/profile/:id', (req, res)=>{
   const {id} = req.params;
   let found = false;
   database.users.forEach((user)=>{
      if (user.id === id){
         found = true;
         res.json(user);
      }
   });

   if (!found){
      res.status(404).json('user not found in database');
   }
});

app.put('/image', (req, res) => {
   const {id} = req.body;
   let found = false;
   database.users.forEach((user)=>{
      if (user.id === id){
         found = true;
         return res.json(++user.entries);
      }
   });
   if (!found){
      res.status(404).json('user not found in database');
   }
});



// // Load hash from your password DB.
// bcrypt.compare("bacon", hash, function(err, res) {
//    // res == true
// });
// bcrypt.compare("veggies", hash, function(err, res) {
//    // res = false
// });

app.listen(3000, ()=>{
   console.log('server started at 3000 port');
});