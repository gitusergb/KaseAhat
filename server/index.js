import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import ConnectDB from './database/db.js';
//requireRoutes
import Routes from './routes/Routes.js';

dotenv.config();
const app = express()
// app.use(express.json())
app.use(cors())
//app.use
 app.use(bodyParser.json({ extended: true }));
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use('/', Routes);
//app.use(express.static('public'));

app.get('/protected-route', (req, res) => {
    res.send('This is a protected route');
});

const PORT = process.env.PORT || 8000
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

async function startServer() {
    try {
      ConnectDB(username, password);
      console.log("Database connection Established");
    } catch {
      console.log("Database connection Failed");
    }

    app.listen(PORT,() => {
      console.log(`Server is running at http://localhost:${PORT}`);
      console.log("Server Started");
    });
  }
  
  startServer();

