var helixPi = require('./helix-pi');

var fitnessScenarios = {
  participants: ['swordsunit', 'ball'],

  scenarios: [
    {
      participants: ['swordsunit'],

      initialPositions: {
        'swordsunit': {
          x: 0,
          y: 0
        }
      },

      startPosition(name) {
        return(this.initialPositions[name]);
      },

      expectedPositions: {
        'swordsunit': [
          {
            frame: 60,
            x: 500,
            y: 0
          }
        ]
      },

      input: [
        {
          startFrame: 0,
          endFrame: 60,
          key: 'right'
        }
      ]
    },
    {
      participants: ['swordsunit'],

      initialPositions: {
        'swordsunit': {
          x: 0,
          y: 0
        }
      },

      startPosition(name) {
        return(this.initialPositions[name]);
      },

      expectedPositions: {
        'swordsunit': [
          {
            frame: 60,
            x: -500,
            y: 0
          }
        ]
      },

      input: [
        {
          startFrame: 0,
          endFrame: 60,
          key: 'left'
        }
      ]
    }
  ],

  fitness: function (expectedPosition, entity) {
    var distance = {
      x: Math.abs(expectedPosition.x - entity.x),
      y: Math.abs(expectedPosition.y - entity.y)
    };

    return 1000 - (distance.x + distance.y);
  }
};

var results = helixPi(fitnessScenarios, 100, 32);

console.log(JSON.stringify({results: results.swordsunit[0].fitness.score}));


