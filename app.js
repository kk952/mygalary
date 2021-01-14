
const express=require('express')
const app = express();
const port = 4000;

const userRouter= require('./user');

app.use('/user',userRouter);
app.use('/tester',userRouter);

app.listen(port,()=>{
    console.log('server run on port :',port)
});
//cosole.log(`example app listening at http://localhost:')