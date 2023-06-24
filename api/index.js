import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import http from "http";
import cors from "cors";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";

const app = express();
app.use(cors());

const httpServer = http.createServer(app);

const typeDefs = gql`
    type Query{
        getWeather(lat:Float!,lon:Float!): Weather
    }
    type Weather{
        weather: [WeatherInfo!]
        main: Main!
        wind: Wind!
        name: String!
        sys: Sys!

    }
    type Coord{
        lon: Float!
        lat: Float!
    }
    type WeatherInfo{
        id: Int
        main: String
        description: String
        icon: String
    }
    type Main{
        temp: Float
        feels_like: Float
        temp_min: Float
        temp_max: Float
        humidity: Float
    }
    type Wind{
        speed: Float
        deg: Float
    }
    type Sys{
        country: String
    }

`;
const resolvers = {
    Query: {
        getWeather: async(_, {lat,lon}) =>{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=metric`);
            return response.json();
        },    
    }
};


const startApolloServer = async (app, httpServer) => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });
    await server.start();
    server.applyMiddleware({ app });
}

startApolloServer(app, httpServer);


export default httpServer;

