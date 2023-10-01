const Recordings = require('../model/recordingSchema');
const { cloudinary } = require('../utils/cloudinary');

const api_welcome_get = (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
};

const api_save_recording_post = async (req, res) => {
  try {
    const data = req.body;

    if (!data) {
      return res.status(400).json({ status: 'Error', message: 'Invalid data request, please make sure you are sending the correct data to the backend!' });
    }

    const recording = data.recording;

    // uploading to cloudinary
    const dataStr = await cloudinary.uploader.upload(recording, { upload_preset: 'hngx', resource_type: 'video' });
    const liveURL = dataStr.secure_url;

    // save to DB
    const newRecording = new Recordings({ title: data.title, url: liveURL });
    await newRecording.save();

    res.status(200).json({ message: 'Video Uploaded Successfully!', id: newRecording._id, 'shareable url': liveURL });
  } catch (err) {
    console.error('Error uploading video', err);
    res.status(500).json({ message: 'Error uploading video', err });
  }
};

const api_get_all_recordings = async (req, res) => {
  try {
    const allRecordings = await Recordings.find({});
    res.status(200).json({ status: 'success', data: allRecordings });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching videos from database', err });
  }
};

const api_get_single_recording = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    if (!id) {
      return res.status(400).json({ status: 'Error', message: 'Invalid recording ID request!' });
    }

    const recording = await Recordings.findById(id);
    res.status(200).json({ message: 'success', data: recording });
  } catch (err) {
    res.status(500).json({ message: 'Error Fetching recording detail(s)', err });
  }
};

const api_update_recording_title = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    if (!id) {
      return res.status(400).json({ status: 'Error updating recording title', message: 'Invalid recording ID request!' });
    }

    // update title of a specific video
    const recording = await Recordings.findByIdAndUpdate(id, { title }, { new: true });
    res.status(200).json({ message: 'success', updatedRecordingInfo: recording });
  } catch (err) {
    res.status(500).json({ message: 'Error Updating the current recording title', err });
  }
};

module.exports = { api_welcome_get, api_save_recording_post, api_get_all_recordings, api_get_single_recording, api_update_recording_title };
