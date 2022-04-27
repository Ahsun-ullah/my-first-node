const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/',(req,res) => {
    res.send('look mama i can not  code node now !! with auto restart')
});

const users = 
[
  { id: 1, name: "Leanne Graham", email: "Sincere@april.biz" },
  { id: 2, name: "tina Graham", email: "tina@april.biz" },
  { id: 3, name: "mina Graham", email: "mina@april.biz" },
  { id: 4, name: "jana Graham", email: "jana@april.biz" },
  { id: 5, name: "lana Graham", email: "lana@april.biz" },
  { id: 6, name: "bina Graham", email: "bina@april.biz" },
  { id: 7, name: "gana Graham", email: "gana@april.biz" },
  { id: 8, name: "pina Graham", email: "piba@april.biz" }
]

app.get('/users',(req,res) =>{
  // filter by search query parameter
    if(req.query.name){
      const search = req.query.name.toLowerCase();
      const matched = users.filter (user => user.name.toLowerCase().includes(search))
      res.send(matched);
    }
    else{
      res.send(users);
    }
    
});

app.get('/user/:id',(req,res)=>{
    console.log(req.params);
    const id = req.params.id;
    const user = users.find(u => u.id === id);
    res.send(user);
});

  app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
  })

app.listen(port,() => {
    console.log('listening to port', port);
});
