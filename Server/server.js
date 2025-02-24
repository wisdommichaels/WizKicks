const express = require('express');

const app = express();
require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { connectdb } = require('./Utils/db');


app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
  optionsSuccessStatus: 200
}))

app.use(bodyParser.json());
app.use(cookieParser())
// app.use(bodyParser.urlencoded({ extended: true }));


app.use("/api", require("./Routes/authRoutes"));

app.get('/', (req, res) => {
  res.send('Hello World!');
});
const PORT = process.env.PORT || 5000;
connectdb();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//  Introduction
 
//  In the code above, we imported the  express  module and created an instance of the express application. We also imported the  configDotenv  function from the  dotenv  module and called it to load the environment variables from the  .env  file. 
//  We then defined the port number for the server to listen on. If the  PORT  environment variable is not defined, the server will listen on port  5000 . 
//  Finally, we started the server by calling the  app.listen()  method and passing in the port number and a callback function that logs a message to the console. 
//  To start the server, run the following command: 
//  node server.js/ npm run dev
 
//  If the server starts successfully, you should see the following message in the console: 
//  Server is running on port 5000
 
//  Conclusion 
//  In this article, we have covered how to use the  dotenv  module to load environment variables from a  .env  file in a Node.js application. We also discussed how to use environment variables to store sensitive information and how to access these variables in a Node.js application. 
//  To learn more about the  dotenv  module, you can visit the  official documentation. 
//  If you have any questions or feedback, feel free to leave a comment.
