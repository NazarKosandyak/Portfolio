const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('./public'));
app.get('/*', (req, res) =>
      res.sendFile('index.html', {root: 'public/'}),
);
app.listen(process.env.PORT || 4000);