require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const router = require('./routes/router');
const { PORT, PASSWORD, DATABASE } = process.env;

const app = express();

app.use(express.json());
app.use(morgan('dev'));

const dbURI = `mongodb+srv://officialayo540:${PASSWORD}@hng2cluster.yzvzw2f.mongodb.net/${DATABASE}`;

(async function () {
  try {
    await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
    app.listen(PORT, () => console.log(`server started on http://localhost:${PORT}`));
  } catch (err) {
    console.log('mongodb not connected', err);
  }
})();

app.use(router);
