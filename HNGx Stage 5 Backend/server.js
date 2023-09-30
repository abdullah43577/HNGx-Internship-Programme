require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT;
const router = require('./routes/routes');
// const multer = require('multer');

const app = express();
// const storage = multer.memoryStorage(); // multer memory storage engine to store files as Buffer objects
// const upload = multer({ storage: storage }); // multer upload object
app.use(morgan('dev'));
const options = { origin: 'http://127.0.0.1:8080', credentials: true };
app.use(cors(options));
app.use(express.urlencoded({ limit: '200mb', extended: true }));
app.use(express.json({ limit: '200mb' })); // parse json data from the request body

// connect to mongoDB
const dbURI = `mongodb+srv://officialayo540:${process.env.MONGO_PASS}@hngx5cluster.yyli1it.mongodb.net/${process.env.MONGO_DB}`;

(async function () {
  try {
    await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
    app.listen(PORT, () => console.log(`server started on http://localhost:${PORT}`));
  } catch (err) {
    console.log('mongodb not connected', err);
  }
})();

app.use(router);

// module.exports = { upload };
