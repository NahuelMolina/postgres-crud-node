const app = require('./app');

app.listen(app.get('port'), app.get('hostname'), () => {
	console.log(`listening on port ${app.get('port')}`);
	console.log(`IP adopted: ${app.get('hostname')}`);
});
