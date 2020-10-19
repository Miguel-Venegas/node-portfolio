const express = require('express');
const bodyParser = require('body-parser');

const resumeRouter = express.Router();

resumeRouter.use(bodyParser.json());

resumeRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('<html><body><h1>View Resume</h1><iframe src="https://giphy.com/embed/VeYSBV7LzSnN6xT9Xr" width="480" height="419" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></body></html>');
})
.post((req, res) => {
    res.end(`your message to Miguel with: ${req.body.name} with description: ${req.body.description}`);
});

module.exports = resumeRouter;