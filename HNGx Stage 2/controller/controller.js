const User = require('../model/User');
const mongoose = require('mongoose');

const api_test = function (req, res) {
  res.status(200).json({ message: 'test successful' });
};

const api_post_create_user = async (req, res) => {
  const { name } = req.body;
  if (!name) throw Error('name not provided');
  try {
    const user = await User.create({ name });
    res.status(201).json({ message: 'user created', user });
  } catch (err) {
    res.status(500).json({ message: 'error creating user', err });
  }
};

const api_get_getUserDetails = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) throw Error('query of either an id or name was not provided');

    let user;

    if (mongoose.Types.ObjectId.isValid(query)) {
      user = await User.findById(query);
    } else {
      const queryLowerCase = query.toLowerCase();
      user = await User.findOne({ name: queryLowerCase });
    }

    if (!user) throw Error('user not found');
    res.status(200).json({ message: 'user found', user });
  } catch (err) {
    res.status(500).json({ message: 'error getting user info', err });
  }
};

const api_put_updateUser = async (req, res) => {
  try {
    const { query } = req.query;
    const { name } = req.body;

    if (!query || !name) throw new Error('query and/or name not provided');

    let user;

    if (mongoose.Types.ObjectId.isValid(query)) {
      user = await User.findByIdAndUpdate(query, { name }, { new: true });
    } else {
      const queryLowerCase = query.toLowerCase();
      user = await User.findOneAndUpdate({ name: queryLowerCase }, { name }, { new: true });
    }

    if (!user) throw Error('user not found');
    res.status(200).json({ message: 'user updated', user });
  } catch (err) {
    res.status(500).json({ message: `error updating user info`, err });
  }
};

const api_delete_deleteUser = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) throw Error('query of either an id or name was not provided');

    let user;

    if (mongoose.Types.ObjectId.isValid(query)) {
      user = await User.findByIdAndDelete(query);
    } else {
      const queryLowerCase = query.toLowerCase();
      user = await User.findOneAndDelete({ name: queryLowerCase });
    }

    if (!user) throw Error('user not found');
    res.status(200).json({ message: 'user deleted' });
  } catch (err) {
    res.status(500).json({ message: 'error deleting user', err });
  }
};

module.exports = {
  api_test,
  api_post_create_user,
  api_get_getUserDetails,
  api_put_updateUser,
  api_delete_deleteUser,
};
