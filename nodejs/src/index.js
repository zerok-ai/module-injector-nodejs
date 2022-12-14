const express = require('express')

// const https = require('https');

console.log(express);
const app = express()
const port = 3000
const process = require('node:process');
console.log('---------------------')
// console.log(process)
console.log(process.argv, process.pid);
app.get('/error', (req, res) => {
  // https.get('https://reqres.in/api/users?page=2');
  res.send(1000/0);
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

