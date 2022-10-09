const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

require('dotenv').config();

app.use(express.json())
app.use(cors())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rv3knlo.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const database = client.db("oneTakaMeal").collection("services");

        app.get('/services', async (req, res) => {
            const query = {};
            const options = {};
            const cursor = database.find(query, options);
            const result = await cursor.toArray()
            res.send(result);
        })

    } finally {

    }
}

run().catch(console.dir)

app.get('/', (req, res) => {
    res.send('সব ঠিকঠাক ')
})



app.listen(port, () => {
    console.log(" shob thikthak ase port No ", port, "te");
})
