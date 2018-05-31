const ul  = document.getElementById('currencies');
<<<<<<< HEAD
const url = "https://api.coinmarketcap.com/v1/ticker/?limit=20";
let tempUl = ul;


document.addEventListener('click', handleClick);
document.addEventListener('input', handleInput);
document.addEventListener('keydown', handleKeyDown);
=======
const url = "https://api.coinmarketcap.com/v1/ticker/?limit=50";


document.addEventListener('click', handleClick);
>>>>>>> f947b90865ee3b34c0d9ac8a368a492a9721a13a

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
<<<<<<< HEAD
      li.className = 'cards'
      img.src = "images/icon/"+currency.symbol.toLowerCase()+".png";
=======
      img.src = "https://s2.coinmarketcap.com/static/img/coins/16x16/"+currency.rank+".png";
>>>>>>> f947b90865ee3b34c0d9ac8a368a492a9721a13a
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

<<<<<<< HEAD
function toggleSortName(e){
  if(ul.className==='asc'|| ul.className!=='dsc'){
    sortByNameDsc();
  }else{
    sortByNameAsc();
  }
}

function toggleSortRank(e){
  if(ul.className==='asc'|| ul.className!=='dsc'){
    sortByRankDsc();

  }else{
    sortByRankAsc();
  }
}

function toggleSortPrice(e){
  if(ul.className==='asc'|| ul.className!=='dsc'){
    sortByPriceDsc();
  }else{
    sortByPriceAsc();
  }
}

function sortByNameDsc(){
  fetch(url)
        .then(function(response){
          return response.json();
      })
      .then(data => {
        ul.innerHTML="";
        ul.className = "dsc";
        dscIcon();
        data.sort(function(a,b){
          let nameA = a.name.toLowerCase();
          let nameB = b.name.toLowerCase();
          if (nameA < nameB) {
             return -1;
           }
           if (nameA > nameB) {
             return 1;
           }
           return 0;
                  });
        return data.map(currency => {
          renderData(currency)
        })
      })
}



function sortByNameAsc(){
=======
function sortByName(){
>>>>>>> f947b90865ee3b34c0d9ac8a368a492a9721a13a
  fetch(url)
        .then(function(response){
          return response.json();
      })
      .then(data => {
<<<<<<< HEAD
        ul.innerHTML="";
        ul.className = "asc";
        ascIcon();
        data.sort(function(a,b){
          let nameA = a.name.toLowerCase();
          let nameB = b.name.toLowerCase();
          if (nameA < nameB) {
             return 1;
           }
           if (nameA > nameB) {
             return -1;
           }
 return 0;
        });
        return data.map(currency => {
          renderData(currency)
        })
      })
}

function sortByRankDsc(){
=======
        data.map(currency=> currency.name).sort();
        ul.innerHTML="";
        return data.map(currency => {renderData(currency)}) 
      })
}

function sortByRank(){
>>>>>>> f947b90865ee3b34c0d9ac8a368a492a9721a13a
  fetch(url)
        .then(function(response){
          return response.json();
      })
      .then(data => {
<<<<<<< HEAD
        ul.innerHTML="";
        ul.className = "dsc";
        dscIcon();
        data.sort(function(a,b){
          return a.rank-b.rank;
        });
        return data.map(currency => {
        renderData(currency);
      })
    })
}

function sortByRankAsc(){
=======
        const rank = data.map(currency=> currency.rank);
        rank.sort();
      })
}

function sortByPrice(){
>>>>>>> f947b90865ee3b34c0d9ac8a368a492a9721a13a
  fetch(url)
        .then(function(response){
          return response.json();
      })
      .then(data => {
<<<<<<< HEAD
        ul.innerHTML="";
        ul.className = "asc";
        ascIcon();
        data.sort(function(a,b){
          return b.rank-a.rank;
        });
        return data.map(currency => {
        renderData(currency);
      })
    })
}

function sortByPriceAsc(){
  fetch(url)
        .then(function(response){
          return response.json();
      })
      .then(data => {
        ul.innerHTML="";
        ul.className = "asc";
        ascIcon();
        data.sort(function(a,b){
          return b.price_usd-a.price_usd;
        })
        return data.map(currency=> {
        renderData(currency);
        })
      })
}

function sortByPriceDsc(){
  fetch(url)
        .then(function(response){
          return response.json();
      })
      .then(data => {
        ul.innerHTML="";
        ul.className = "dsc";
        dscIcon();
        data.sort(function(a,b){
          return a.price_usd-b.price_usd;
        })
        return data.map(currency=> {
        renderData(currency);
        })
      })
}

function search(){
  const input = document.querySelector('#input');
  const data = ul.childNodes;
  const temp = Array.from(data).filter(function(data){
    if(data.firstChild){
      if(data.childNodes[3].innerHTML.toLowerCase().includes(input.value)||
        data.childNodes[1].innerHTML.includes(input.value.toUpperCase())&&
        input.value!==""){
        return data;
      }
    }
  });
  console.dir(temp);
  ul.innerHTML="";
  temp.forEach(function(item){
    ul.appendChild(item);
  })
      // append(ul,temp);
  // data.forEach(function(data){
  //   if(data.firstChild){
  //     if(data.childNodes[3].innerHTML.toLowerCase().includes(input.value)){
  //       console.dir(data.childNodes[3]);
  //       console.dir(
  //         )
  //       tempUl.appendChild(data.childNodes[3]);
  //     }
  //      // if((data.childNodes[3].innerHTML.includes(input.value)||
  //      //         data.childNodes[1].innerHTML.includes(input.value.toUpperCase()))&&
  //      //  input.value!==""){
  //      //    ul.innerHTML="";
  //      //  console.log(data);
  //      //    // ul.appendChild(element);
  //      //  }
  //   }
  // })
}

function ascIcon(){
  document.querySelector('.fa-sort-amount-up').classList.add('show');
  document.querySelector('.fa-sort-amount-up').classList.remove('hide');
  document.querySelector('.fa-sort-amount-down').classList.remove('show');
}

function dscIcon(){
  document.querySelector('.fa-sort-amount-down').classList.remove('hide');
  document.querySelector('.fa-sort-amount-down').classList.add('show');
  document.querySelector('.fa-sort-amount-up').classList.remove('show');
}

function handleClick(e){
  if(e.target.id ==='sort-name')
    toggleSortName();
  if(e.target.id ==='sort-rank')
    toggleSortRank();
  if(e.target.id === 'sort-price')
    toggleSortPrice();
  if(e.target.id ==="search")
  search();
}

function handleInput(e){
  if(e.target.id ==="")renderData();
  if(e.target.id === 'input'){
    search();
  }
}

function handleKeyDown(e){
  if(e.target.keyCodes ===8){
    search();
  }
}
=======
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
>>>>>>> f947b90865ee3b34c0d9ac8a368a492a9721a13a
