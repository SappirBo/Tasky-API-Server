'use strict';
const express =require('express');
const cors = require('cors');
const bodyParser =require('body-parser')
const config = require('./config');
const userRoutes = require('./routes/user-routes');
const taskRoutes = require('./routes/tasks-routes');
const authRoutes = require('./routes/auth-routes');
const teamRoutes = require('./routes/team-routes')



const app = express();
require = require('moment')

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/api', userRoutes.routes, taskRoutes.routes, authRoutes.routes, teamRoutes.routes);

app.listen(config.port, ()=> console.log('App is listening on url http://' + config.host + ':' + config.port));