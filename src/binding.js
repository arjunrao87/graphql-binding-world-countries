const { makeBindingClass } = require('graphql-binding')
const schema = require('./schema')
export const WorldCountriesBinding = makeBindingClass({schema});