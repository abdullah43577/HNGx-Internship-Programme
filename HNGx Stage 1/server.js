const express = require('express');
const morgan = require('morgan');
const router = require('./routes/routes');

const app = express();
app.use(morgan('dev'));

app.listen(8080, () => console.log(`server is listening on port http://localhost:8080`));

app.use(router);
