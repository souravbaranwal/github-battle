var axios = require("axios");

function getProfile(username) {
  return axios
    .get("https://api.github.com/users/" + username)
    .then(function(user) {
      return user.data;
    });
}
function getRepos(username) {
  return axios.get(
    "https://api.github.com/users/" + username + "/repos" + "&per_page=100"
  );
}

function getStarCount(repos) {
  return repos.data.reduce(function(count, repo) {
    return count + repo.stargazers_count;
  }, 0);
}

function calculateScore(profile, repos) {
  var followers = profile.followers;
  var totalStars = getStarCount(repos);

  return followers * 3 + totalStars;
}

function handleError(error) {
  console.warn(error);
  return null;
}

function getUserData(player) {
  return axios.all([getProfile(player), getRepos(player)]).then(function(data) {
    var profile = data[0];
    var repos = data[1];

    return {
      profile: profile,
      score: calculateScore(profile, repos)
    };
  });
}

function sortPlayers(players) {
  return players.sort(function(a, b) {
    return b.score - a.score;
  });
}

module.exports = {
  Battle: function(players) {
    return axios
      .all(players.map(getUserData))
      .then(sortPlayers)
      .catch(handleError);
  }
};
