const express = require('express')
const app = express();
const port = 3000;
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const path = require('path');
const bodyParser = require('body-parser')

require('dotenv').config();
app.use(bodyParser.json());
app.use(express.static('web-page'));
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(require('./router'));

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
}) 