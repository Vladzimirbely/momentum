const quotes = '../json/data.json';
const res = await fetch(quotes);
const data = await res.json(); 
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');

export class Quotes {
    async getQuotes() {  
      let jsonArr = [data[0], data[1], data[2]];
      let randomNum = Math.ceil(Math.random() * jsonArr.length - 1);
      
      quote.textContent = data[randomNum]["text"];
      author.textContent = data[randomNum]["author"];  
}
}

function showNextTxt() {
    const firstTxt = data.shift();
    data.push(firstTxt);
    quote.textContent = data[0]["text"]; 
    author.textContent = data[0]["author"];  
}

changeQuote.addEventListener('click', showNextTxt);
