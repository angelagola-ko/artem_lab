const { gql } = require('apollo-server-express');

const typeDefs = gq;`
    type User {
        _id: ID
        username: String
        email: String
        Pics: [Pic]  
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
      }

`

module.exports = typeDefs;