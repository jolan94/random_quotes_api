const baseUrl = 'https://api.quotable.io/random';
// "https://api.goprogram.ai/inspiration";

let quoteDiv = document.getElementById('quotebox');
let authorDiv = document.getElementById('authorbox');
let btnElement = document.getElementById('refresh');

async function getQuote() {
  fetch(baseUrl, {
    cache: 'no-cache',
  })
    .then((res) => {
      if (res.ok) {
        console.log('Success');
        return res.json();
      } else {
        console.log('Not Successful');
      }
    })
    .then((data) => {
      console.log(data);
      showQuote(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

let showQuote = (quote) => {
  quoteDiv.innerText = quote.content;
  authorDiv.innerText = quote.author;
};

window.addEventListener('load', getQuote);
btnElement.addEventListener('click', getQuote);
