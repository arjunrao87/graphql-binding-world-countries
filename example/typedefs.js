const typedefs = 
`
type Query {
  hello(name: String): String!
  capital(country: String): [String!]!
}
`

module.exports = typedefs;