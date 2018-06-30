const { GraphQLServer } = require('graphql-yoga')
const WorldCountriesBinding = require('graphql-binding-world-countries/dist')
const typeDefs = require("./typedefs")
const resolvers = {
    Query: {
      hello: (parent, { name }) => `Hello ${name || 'World'}!`,
      capital: (parent, { country }, context, info) => {
        const input = `
          input:{
            name: ${country || "Senegal"}
          }
        `
        return WorldCountriesBinding.query.countries(input, info);
      },
    },
}

const server = new GraphQLServer({ resolvers, typeDefs })
server.start(() => console.log('Server running on http://localhost:4000'))