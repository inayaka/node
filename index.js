const express = require('express')
const app = express()

app.get('/', function (req, res) {
  console.log(req)
  res.send('Hello World')
})

app.listen(80)






// for(let letter of "Hello World Node JS"){
//     console.log(letter);
// }


// console.log("Hello World Node");
