const express=require('express')

//============================================
const userRoute=express.Router();
/*
userRouter.get('/',(req,res)=>{
    res.send('/index.html');
});

userRouter.post('/',(req,res)=>{
    res.send('call post  verb!!!!!');
});

userRouter.put('/',(req,res)=>{
    res.send('call put verb!!!!!');
});

userRouter.delete('/',(req,res)=>{
    res.send('call delete verb!!!!!');
});


*/
//=====================================
userRoute.route("/user")

.get((req,res)=>{
    res.send('got a get request at /user')
})


.put((req,res)=>{
    res.send('got a put request at /user')
})

.delete((req,res)=>{
    res.send('got a delete request at /user')
})

module.exports=userRoute


