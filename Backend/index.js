const { urlencoded } = require('express');
const cors = require('cors');
const express = require('express');
require('./db/config');
const User = require('./db/user');
const app = express();
app.use(express.json());
app.use(cors());
app.post("/register",async (req,res)=>{
    let payload = await User.create(req.body);
    payload = payload.toObject();
    delete payload.password;
    res.send(payload);
})
app.post("/login", async (req,res)=>{
    console.log(req.body);
    if( req.body.password && req.body.email){
        let user = await User.findOne(req.body).select("-password");
        if(user){
            res.send(user);
        }else{
            res.send({result: 'No User found'});``
        }
    }else{
        res.send({result: 'No User found'});
    }
})

app.listen(5000,()=>{
    console.log(`Port is running on 5000`)
});