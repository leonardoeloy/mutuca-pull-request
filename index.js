console.log('Loading Mutuca Pull Request');

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
}

module.exports = MutucaPullRequest;
