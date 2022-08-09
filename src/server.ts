import express from 'express';
const PORT = process.env.PORT || 8080;
const app = express();

app.get('/', (req, res) => {
	res.contentType('html');
	res.send('<h1>Hello world</h1>');
});

app.listen(PORT, () => {
	console.log('㎫㎫㎫㎫㎫㎫㎫㎫㎫');
	console.log('Server is started on port 8080');
	console.log('㎫㎫㎫㎫㎫㎫㎫㎫㎫');
});
