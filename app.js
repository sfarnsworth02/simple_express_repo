const express = require('express');
const port = 3002;
const app = express();

const appName = "Simple Express Assignment";

app.use(express.static('public'));
app.use(express.json());



app.listen(port, (err) =>
{
    if (err)
    {
        console.log(`Your ${appName} had an error when logging in to ${port}`, err);
    }
    console.log(`You successfully logged into your ${appName} on ${port}`);
})
