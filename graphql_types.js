const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        username: String
        email: String
        # Add other fields as needed
    }
`;

module.exports = typeDefs;