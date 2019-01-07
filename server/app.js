const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb')
mongoose.connection.once('open', ()=>{
    console.log('connected to database')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, (req, rsp) => {
    console.log('now listening for requests on port 4000')
})