const { makeExecutableSchema } = require('graphql-tools');

const resolvers = require("./resolvers");
const { typeDefs } = require("./typedefs");

const schema = makeExecutableSchema({ typeDefs, resolvers })

module.exports = schema
