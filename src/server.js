const express = require('express');
const app = express();
const router = require('./router/routes')
require('./config/database')

app.use(express.json());
app.use(router);

app.listen(3000);