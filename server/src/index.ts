import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import db from "./database/db";
import { buildSchema } from "type-graphql";

import UserResolver from "./resolvers/user.resolver";
import { User } from "./entities/user.entity";
import UserService from "./services/user.service";
async function main() {
  const schema = await buildSchema({
    resolvers: [UserResolver],
  });
  const server = new ApolloServer<{}>({
    schema,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: Number(process.env.PORT) },
    context: async ({ req, res }) => {
      return {};
    },
  });

  await db.initialize()
  .then(async (data) => {
    console.log('DB initialized');
    const results = await data.createQueryBuilder()
    .insert()
    .into(User)
    .values([
      { email: 'test1@test.com', password: '123456'},
    ])
    .execute()
  
  });

  console.log(`🚀  Server ready at: ${url}`);
}
main();