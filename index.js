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
      const oldContent = fs.readFileSync('data.json',{encoding:'utf-8'});

      // ZMIENIAMY STRINGA NA TABLICĘ OBIEKTÓW
      const proceedData = JSON.parse(oldContent);
    
      // DO POBRANEJ TABLICY DODAJEMY NOWE DANE
      proceedData.push(req.query)
    
      // ZMIENIAMY TABLICĘ NA STRINGA
      const newData = JSON.stringify(proceedData, null , 2)
    
      // ZAPISUJEMY NOWĄ TABLICĘ JAKO STRINGA
      fs.writeFileSync('data.json', newData)
      res.send('ok')
    })
    
    // WYSYŁANIE KOMENTARZY Z SERWERA DO KLIENTA
    app.get('/getComments', (req, res) => {
      // PRZECZYTAJ DATA.JSON
      const readJSON =  fs.readFileSync('data.json',{encoding:'utf-8'});
      
      // ZMIEN STRINGA NA TABLICĘ
      const proceedData = JSON.parse(readJSON);
    
      // WYŚWIETL W PRZEGLĄDARCE
      res.json( proceedData )
    })
    
    app.listen(80)

//     const oldContent = fs.readFileSync('data.json', {encoding:'UTH-8'}, (err, data) => {
    
//     const newData =json.parse(oldContent);
//     newData.push(req.query)
    


//     // fs.readFile('data.json', (err, data) => {
//     //   console.log(data)
//     // })
    
      
      
//       res.send(data)
//     }) 


//     // fs.open('data.json', 'w', function (err, file) {
//     //   // if (err) throw err;
//     //   console.log('Saved!');
//     // });

//       res.send('okok')
//   })

//   // app.post('/sendForm', (req, res) => {
//   //   console.log(req.body)
    

//     app.get('/getComments', (req, res) =>{           
//       res.send("okidoki")
//     })  

//     app.listen(80)


  
// // app.get('*', funkction (req, res) {
// //   console.log(req.originalUrl)
// // })

// // app.get('/index.html', (req, res) => {
// //   res.sendFile
// // })


// // app.get('/style.css', (req, res) => {
// //   res.sendFile
// // })



// // app.get('/', function (req, res) {
// //   console.log(req)
// //   res.send('Heloooł świecie')
// // })

// // pliki statyczne








// // for(let letter of "Hello World Node JS"){
// //     console.log(letter);
// // }

// // console.log("Hello World Node");
