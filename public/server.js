const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const server = express();
const port = process.env.REACT_APP_SERVER || 9000;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.use(cors());

server.use(express.static(path.join(__dirname, 'public')));

server.get('/test', (req, res) => {
    res.send('Test API: Welcome to your express API!!!');
});

server.listen(port, () => console.log(`App running on port ${port} 🔥`));