const dbConnect = require('./mongodb');
const express = require('express');
const app = express();
const port = 3000

app.use(express.json());
app.get('/',async (res,resp)=>{
    let data = await dbConnect();
    data= await data.find().toArray();
    resp.send(data);
});


app.post("/", async (req,resp)=>{
    let data = await dbConnect();
    let result = await data.insert(req.body)
    resp.send(result)

})


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))