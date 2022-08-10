import express from 'express';
const PORT = process.env.PORT || 8080;
const app = express();

// loaderio-ce566fc738399261fd36dddc7d5926cb
app.get('/loaderio-ce566fc738399261fd36dddc7d5926cb', (req, res) => {
	res.send('loaderio-ce566fc738399261fd36dddc7d5926cb');
});

app.get('/', (req, res) => {
	res.contentType('html');
	res.send('<h1>Hello world</h1>');
});

app.listen(PORT, () => {
	console.log('㎫㎫㎫㎫㎫㎫㎫㎫㎫');
	console.log('Server is started on port 8080');
	console.log('㎫㎫㎫㎫㎫㎫㎫㎫㎫');
});
