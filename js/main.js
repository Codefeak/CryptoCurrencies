const ul  = document.getElementById('currencies');
const url = "https://api.coinmarketcap.com/v1/ticker/?limit=50";


document.addEventListener('click', handleClick);

fetch(url)
    .then(function(response) {
      return response.json();
    })

    .then(data => {

      return data.map(currency =>{
        renderData(currency);
      })
    }
);


function createNode(element){
  return document.createElement(element);
};

function append(parent, element){
  return parent.appendChild(element);
};

function renderData(currency){
  let li = createNode('li'),
      img = createNode('img'),
      spanName = createNode('span'),
      symbol = createNode('h3');
      hr = createNode('hr');
      priceInUsd = createNode('p');
      img.src = "https://s2.coinmarketcap.com/static/img/coins/16x16/"+currency.rank+".png";
      spanName.innerHTML = `${currency.name}`;
      symbol.innerHTML = `${currency.symbol}`;
      priceInUsd.innerHTML = `${'$'}${currency.price_usd}`;
      append(li, img);
      append(li, symbol);
      append(li, hr);
      append(li, spanName);
      append(li, priceInUsd);
      append(ul, li);
};

function sortByName(){
  fetch(url)
        .then(function(response){
          return response.json();
      })
      .then(data => {
        data.map(currency=> currency.name).sort();
        ul.innerHTML="";
        return data.map(currency => {renderData(currency)}) 
      })
}

function sortByRank(){
  fetch(url)
        .then(function(response){
          return response.json();
      })
      .then(data => {
        const rank = data.map(currency=> currency.rank);
        rank.sort();
      })
}

function sortByPrice(){
  fetch(url)
        .then(function(response){
          return response.json();
      })
      .then(data => {
        const price = data.map(currency=> currency.price);
        price.sort();
      })
}

function handleClick(e){
  console.log(e.target);
  if(e.target.id ==='sort-name'){
    sortByName();
  if(e.target.id ==='sort-rank'){
    sortByRank();
  }
  }
}
