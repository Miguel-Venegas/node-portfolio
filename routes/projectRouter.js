const express = require('express');
const bodyParser = require('body-parser');

const projectRouter = express.Router();

projectRouter.use(bodyParser.json());

projectRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('<html><body><h1>Awesome projects</h1><iframe src="https://giphy.com/embed/VeYSBV7LzSnN6xT9Xr" width="480" height="419" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></body></html>');
})
.post((req, res) => {
    res.end(`your are now viewing awesome projects: ${req.body.name} with description: ${req.body.description}`);
});

module.exports = projectRouter;