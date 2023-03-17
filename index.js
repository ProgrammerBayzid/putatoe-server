const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

require('dotenv').config();
const app = express()
const port = process.env.PORT || 5000


// middelware
app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.j7rvpzy.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });






async function run() {
    try {
   
        const newsCollection = client.db('newsPortal').collection('news');



       
        app.get('/news', async (req, res) => {
            const query = {}
            const users = await newsCollection.find(query).toArray();
            res.send(users);

        });



    }

    catch (error) {

    }
}
run().catch(console.log)








app.get('/', (req, res) => {
    res.send('doctor-portal server is running')
})
app.listen(port, (req, res) => {
    console.log(`doctor-portal  server is running port ${port}`);
})