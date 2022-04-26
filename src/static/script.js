
let oldData = "";

// console.log(location.origin + "/getComments")
function getComments(){
  
  // wysyła zapytanie do get comments
  
  fetch(location.origin + "/getComments")
  
  // zamieniamy odpowiedz na formę JSON'ową
  
  .then(dt => dt.json())
  // wyświetlamy pozyskane dane (te dane są tablice obiektu)
  
  .then(dt => {    
    if(dt.length == oldDataLength){
      console.log("Nie mamy nowych komentarzy");
      return;
    }else{
      oldDataLength = dt.length;
    }
    }
      // console.log(dt)
      //odwroc kolejnosc komentarzy od najnowszych
    dt.reverse();

const commmentSection = document.querySelector(".commentsSection")

commmentSection.innerText = "";

  
      for(let comment of dt){
          // TWORZYMY NOWY ELEMENT ARTICLE (DLA KAŻDEGO KOMENTARZA)
          const article = document.createElement("article");
          // TWORZYMY NOWY ELEMENT DIV (DLA NIKU KOMENTATORA)
          const nick = document.createElement("div");
          // WPISUJEMY DO DIVA NICK KOMENTUJĄCEGO (pobrany z dt)
          nick.innerText = comment.nick;
  
          // PRZYPINAMY DIV DO ARTICLE
      article.append(nick);
  
      // TO SAMO CO WYŻEJ, TYLKO DLA KOMENTARZA
      const content = document.createElement("div");
      content.innerText = comment.comment;
      article.append(content);
  
      // PRZYPINAMY ARTICLE DO PRZYGOTOWANEJ SEKCJI Z HTML'a
      // document.querySelector(".commentsSection").append(article);
      
      commmentSection.append(article);
    }
  }) 
}
        // console.log(comment)
getComments();


        // wysyłanie komentarzy

const form = document.querySelector("form")
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;
  const nick = e.target[0].value;
  const comment = e.target[1].value;

  // console.log(e.target.action);

  fetch(e.target.action + "?nick=" + nick + "&comment=" + comment)
  // console.log(e.target[0].value)
  .then(dt => dt.text())
  .then(dt =>{
    console.log(dt)
  })

})

setInterval(getComments, 1000)