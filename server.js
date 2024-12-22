const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to my app');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`app is listening on 3000`);
});


//docker run -d -p 3000:3000  nodes-app:1.0 

