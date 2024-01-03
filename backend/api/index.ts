import express from 'express';
import * as config from '../config';

const app = express();
const port = 4882;

app.get('/', (req, res) => {
	res.json({
		appName: config.getAppName() 
	});
});

app.listen(port, () => {
	console.log(`server is running at http://localhost:${port}`);
});