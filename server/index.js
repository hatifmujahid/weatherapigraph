import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import http from "http";
import cors from "cors";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";

const app = express();
app.use(cors());

const httpServer = http.createServer(app);

const typeDefs = gql`
    type Query {
        hello: String
    }
`;

const resolvers = {
    Query: {
        hello: () => "Hello, world!",
    },
};

const startApolloServer = async (app, httpServer) => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });
    await server.start().then(() => console.log("Apollo Server started"));
    server.applyMiddleware({ app });
}

startApolloServer(app, httpServer);


export default httpServer;

