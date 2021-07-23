const express = require('express')

const { technology, bollywood } = require('./data.js')

const app = express()

app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*')
   res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')

   if (req.method === 'OPTIONS') {
      return res.sendStatus(200)
   }
   next()
})

app.get('/', (req, res) => {
   res.send({ technology, bollywood })
})

app.listen(5000, () => console.log('server is started'))

