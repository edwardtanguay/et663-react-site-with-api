import express from 'express';
import * as config from '../config';
import cors from 'cors';

const app = express();
app.use(cors());
const port = 4882;

app.get('/', (req, res) => {
	res.status(203);
	res.json({
		appName: config.getAppName() 
	});
});

app.listen(port, () => {
	console.log(`server is running at http://localhost:${port}`);
});