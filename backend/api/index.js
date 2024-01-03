import express from 'express';

const app = express();
const port = 4882;

app.get('/', (req, res) => {
	res.json({
		appName: 'et663-react-site-with-api'
	});
});

app.listen(port, () => {
	console.log(`server is running at http://localhost:${port}`);
});