const express = require('express')
const app = express()
const path = require('path')

// POBIERZ FILE SYSTEM
const fs = require('fs'); 

// 1) Create our store
// console.log(__dirname)
// console.log(__filename)

// app.use(express.static('src/static'))

// KONFIGURACJA STATYCZNEGO FOLDERU
app.use
  (express.static(
      path.join(__dirname, '/src/static')
      )
  )
  
      // POBIERANIE INFORMACJI OD KLIENTA (Z FORMULARZA)
  app.get('/sendForm', (req, res) => {
      // CZYTAMY PLIK DATA.JSON I ZAPISUJEMY JAKO OLDCONTENT
      // OLDCONTENT JEST STRIGIEM
      // console.log(req.query)
    const oldContent = fs.readFileSync('data.json', {encoding:'UTH-8'}, (err, data) => {
    
    const newData =JSON.parse(oldContent);
    newData.push(req.query)
    


    // fs.readFile('data.json', (err, data) => {
    //   console.log(data)
    // })
    
      
      
      res.send(data)
    }) 


    // fs.open('data.json', 'w', function (err, file) {
    //   // if (err) throw err;
    //   console.log('Saved!');
    // });

      res.send('okok')
  })

  // app.post('/sendForm', (req, res) => {
  //   console.log(req.body)
    

    app.get('/getComments', (req, res) =>{           
      res.send("okidoki")
    })  

    app.listen(80)


  
// app.get('*', funkction (req, res) {
//   console.log(req.originalUrl)
// })

// app.get('/index.html', (req, res) => {
//   res.sendFile
// })


// app.get('/style.css', (req, res) => {
//   res.sendFile
// })



// app.get('/', function (req, res) {
//   console.log(req)
//   res.send('Heloooł świecie')
// })

// pliki statyczne








// for(let letter of "Hello World Node JS"){
//     console.log(letter);
// }

// console.log("Hello World Node");
