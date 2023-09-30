const mongoose = require('mongoose');

const recordingsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      lowercase: true,
    },

    url: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

const Recording = mongoose.model('recording', recordingsSchema);

module.exports = Recording;
