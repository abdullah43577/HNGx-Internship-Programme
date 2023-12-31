const getCurrentUTCTime = function () {
  const now = new Date();

  const year = now.getUTCFullYear();
  const month = String(now.getUTCMonth() + 1).padStart(2, '0');
  const day = String(now.getUTCDate()).padStart(2, '0');
  const hours = String(now.getUTCHours()).padStart(2, '0');
  const minutes = String(now.getUTCMinutes()).padStart(2, '0');
  const seconds = String(now.getUTCSeconds()).padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
};

const getSlackUser = (req, res) => {
  try {
    const { slack_name, track } = req.query;

    if (!slack_name || !track) throw Error('Invalid query parameters');

    const getCurrentDayOfWeek = new Date().toLocaleString('en-us', { weekday: 'long' });

    const utc_time = getCurrentUTCTime();

    res.status(200).json({
      slack_name: slack_name,
      current_day: getCurrentDayOfWeek,
      utc_time: utc_time,
      track: track,
      github_file_url: 'https://github.com/abdullah43577/HNGx-Internship-Programme/blob/master/HNGx%20Stage%201/server.js',
      github_repo_url: 'https://github.com/abdullah43577/HNGx-Internship-Programme/tree/master/HNGx%20Stage%201',
      status_code: 200,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getSlackUser };
