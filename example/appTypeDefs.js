const appTypeDefs = 
`
type Query {
  hello(name: String): String!
  capital(country: String): [Country]
}
`

module.exports = appTypeDefs;