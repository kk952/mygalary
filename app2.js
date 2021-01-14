const express=require('express')
const app = express();
const port = 4000;

app.use('/',express.static('public/html'))
app.use('/images',express.static('public/images'))

app.listen(port,()=>{
    console.log(`example app listening at http://localhost:${port}`)
})