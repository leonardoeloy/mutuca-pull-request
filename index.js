const {ipcMain} = require('electron');
console.log('Loading Mutuca Pull Request');

const version = '1.0.4';

class MutucaPullRequest {
  constructor() {}

  pluginName() {
    return "mutuca-pull-request";
  }

  pluginType() {
    return "card";
  }

  cardSize() {
    return 4;
  }

  version() {
    return version;
  }

  cardPath() {
    return `${__dirname}/card.html`;
  }

  toString() {
    return this.pluginName() + "@" + version;
  }
}

ipcMain.on('plugin-tick', (event) => {
  let mutucaApp = global.app.mutucaApp;
  mutucaApp.github.pullRequests.getAll({
    repo: mutucaApp.config.get("context").github.repository,
    user: mutucaApp.config.get("context").github.owner,
    state: "open"
  }, (error, response) => {
    if (error) {
      console.log('error: ' + error);
      return;
    }

    mutucaApp.window.send('mutuca-pull-request-update', response);
  });
});

module.exports = MutucaPullRequest;
