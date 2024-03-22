import express, {Request, Response, Express} from "express";
import dotenv from "dotenv";
import * as database from "./config/database";
dotenv.config();
const app: Express = express();
const port: number | string  = process.env.PORT || 3002;
import Article from "./models/article.model";
import {ApolloServer} from "apollo-server-express";
import { typeDefs } from "./typeDefs/index.typeDefs";
import { resolvers } from "./resolvers/index.resolver";
import { requireAuth } from "./middlewares/auth.middleware";


const startServer = async () => {
	database.connect();
	app.get("/article", async (req: Request, res: Response) => {
		const article = await Article.find({
			deleted: false
		});
		res.json({
			articles: article
		})
	})

	//Graphql

	app.use("/graphql", requireAuth);

	

	const apolloServer = new ApolloServer ({
		typeDefs: typeDefs,
		resolvers: resolvers,
		context: ({req}) => req
	});

	await apolloServer.start();
	apolloServer.applyMiddleware({
		app: app,
		path: "/graphql"
	});


	app.listen(port, () => {
		console.log(`App listen on port ${port}`);
	})
}

startServer();

