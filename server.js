const express = require('express')
const app = express();
const path = require('path')


app.use(express.static(path.join(__dirname, 'pub')));


app.use("/script", express.static(__dirname + '/pub/js'));
app.use("/image",  express.static(__dirname + '/pub/src'));
app.use("/css",  express.static(__dirname + '/pub/css'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/pub/index.html'));
})

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
});
