const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send("Server listening on port 3000");
})

app.listen(3000);