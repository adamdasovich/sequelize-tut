const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Hey Bob!')
})

app.listen(PORT, () => console.log(`The server is listening on port: ${PORT}.`))