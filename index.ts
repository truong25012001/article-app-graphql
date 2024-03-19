import express, {Request, Response, Express} from "express";

const app: Express = express();
const port: number = 3002;

app.get("/article", (req: Request, res: Response) => {
	res.json({
		articles: []
	})
})

app.listen(port, () => {
	console.log(`App listen on port ${port}`);
})