console.log('Loading Mutuca Pull Request');

const version = '1.0.2';

class MutucaPullRequest {
  constructor() {}

  pluginName() {
    return "mutuca-pull-request";
  }

  cardSize() {
    return 4;
  }

  cardPath() {
    return `${__dirname}/card.html`;
  }

  toString() {
    return this.pluginName() + "@" + version;
  }
}

module.exports = MutucaPullRequest;
