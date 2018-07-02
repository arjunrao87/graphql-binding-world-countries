const { GraphQLServer } = require('graphql-yoga')
const binding = require('graphql-binding-world-countries/dist').default
const appTypeDefs = require("./appTypeDefs")
const bindingTypeDefs = require("./bindingTypeDefs")
const mergedTypeDefs = `${appTypeDefs}${bindingTypeDefs}`

const resolvers = {
    Query: {
      hello: (parent, { name }) => `Hello ${name || 'World'}!`,
      capital: (obj, {country}, context, info) => {
        return binding.query
                      .countries({input: {name: `${country}`}}, info, {context})
                      .then(result => result)
                      .catch((error) => {console.log(error)});

      },
    },
}

const server = new GraphQLServer({  resolvers, 
  typeDefs: mergedTypeDefs,  
  resolverValidationOptions :{
    requireResolversForResolveType: false
  }
})
server.start(() => console.log('Server running on http://localhost:4000'))
