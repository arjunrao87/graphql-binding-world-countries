const { Binding } = require('graphql-binding')
const schema = require('./schema')

class WorldCountriesBinding extends Binding {

  constructor() {
    super({ schema })
  }

}

module.exports = WorldCountriesBinding