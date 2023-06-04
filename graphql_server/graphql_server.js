const express = require("express");
const app = express();
const PORT = 8000;
const userData = require("./wallet_data.json");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require("graphql");

const graphql = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schemas");

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log("Server running");
});
