const fs = require('fs');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const typeDefs = require('./graphql_types');

const schema = makeExecutableSchema({ typeDefs });

const introspection = require('graphql').getIntrospectionQuery();

require('graphql').graphql(schema, introspection).then((result) => {
    fs.writeFileSync('schema.json', JSON.stringify(result, null, 2));
    console.log('Schema exported to schema.json');
});
