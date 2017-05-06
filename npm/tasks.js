'use strict';

module.exports = {
  scripts: {
    lint        : 'eslint .',
    test        : 'nyc ava',
    'test:watch': 'nyc ava -w'
  }
};
