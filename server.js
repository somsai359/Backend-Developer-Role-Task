//assign dependencies to variables.
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const app = express();
dotenv.config();

const PORT = process.env.PORT || 8070;

app.use(cors());

app.use(bodyParser.json());

//connect database
const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Mongodb Connection Success!');
});

//create coonnection between front end and backend
const studentRoute = require('./routes/Admin_route');
const adminRoute = require('./routes/Adminroute');
const viewing = require('./routes/Studentview');
app.use('/admin',adminRoute);
app.use('/admin', studentRoute);
app.use('/student', viewing);


app.listen(PORT, () => {
  console.log(`Server is up and running on port : ${PORT}`);
});
