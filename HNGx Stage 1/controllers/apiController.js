const getCurrentUTCTime = function () {
  const now = new Date();

  const year = now.getUTCFullYear();
  const month = String(now.getUTCMonth() + 1).padStart(2, '0');
  const day = String(now.getUTCDate()).padStart(2, '0');
  const hours = String(now.getUTCHours()).padStart(2, '0');

  // Round the minutes to the nearest minute
  const minutes = String(Math.round(now.getUTCMinutes() / 2) * 2).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

const getSlackUser = (req, res) => {
  const { slack_name, track } = req.params;

  const getCurrentDayOfWeek = new Date().toLocaleString('en-us', { weekday: 'long' });

  const utc_time = getCurrentUTCTime();

  const slackUser = {
    slack_name: slack_name,
    current_day: getCurrentDayOfWeek,
    utc_time: utc_time,
    track: track,
    github_file_url: 'https://github.com/username/repo/blob/main/file_name.ext',
    github_repo_url: 'https://github.com/username/repo',
    status_code: 200,
  };
  res.status(200).json({ slackUser });
};

module.exports = { getSlackUser };
