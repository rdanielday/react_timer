const express = require('express');

// Create our app

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.use((req, res, next) => {
	if (req.headers['x-forwarded-proto'] === 'https') {
		res.redirect('http://' + req.hostname + req.url);
	} else {
		next();
	}
});

app.listen(PORT, () => {
	console.log('Server is up on port ' + PORT);
});
