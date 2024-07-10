const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Register = require('./models/models');
const registerRouters = require('./routes/registerRoutes');
const port = 5001;
const cors = require('cors')



app.use(cors());
app.use(express.json())




main().then(() => {
    console.log("mongoDB connected ")
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/db1');
}



//

app.use(registerRouters)





app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})