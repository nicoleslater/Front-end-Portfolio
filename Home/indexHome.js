https://newsapi.org/v2/everything?q=Apple&from=2023-07-12&sortBy=popularity&apiKey=248076a179b4446ca60d2fbbe2fbbb60

const newsQuery = document.getElementById("newsQuery");
const newsdetails = document.getElementById("newsdetails");
const newsType = document.getElementById("newsType");
const generalBtn = document.getElementById("general");
const businessBtn = document.getElementById("business");
const sportsBtn = document.getElementById("sports");
const technologyBtn = document.getElementById("technology");
const entertainmenttBtn = document.getElementById("entertainment");
const searchBtn = document.getElementById("searchBtn");

const API_KEY = "248076a179b4446ca60d2fbbe2fbbb60";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=in&apikey=";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=business&apikey=";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apikey=";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apikey=";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apikey=";


generalBtn.addEventListener("click", function(){

})
businessBtn.addEventListener("click", function(){
    
})
sportsBtn.addEventListener("click", function(){
    
})
technologyBtn.addEventListener("click", function(){
    
})
entertainmentBtn.addEventListener("click", function(){
    
})
searchBtn.addEventListener("click", function(){
    
})


// let url = 'https://newsapi.org/v2/top-headlines?' +
//           'country=us&' +
//           'apiKey=248076a179b4446ca60d2fbbe2fbbb60';
// let req = new Request(url);
// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     })

// const url = 'https://newsapi.org/v2/top-headlines?' +
//           'country=us&' +
//           'apiKey=248076a179b4446ca60d2fbbe2fbbb60';
// const req = new Request(url);
// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     })



//  function getNews(){
//     fetch('https://newsapi.org/v2/everything?q=Apple&from=2023-07-12&sortBy=popularity&apiKey=248076a179b4446ca60d2fbbe2fbbb60')
//     .then(data => data.json())
//     .then(response => {
//         console.log(response.results);

//         for(let i = 0; i < response.results.length; i++){
//             console.log(response.results[i].title);
//             const output = document.getElementById('output');

//             try {
//                 output.innerHTML += `
//                 <div class="card">
//                 <div class="card-body">
//                 <img src="${response.results[i]}" />
//                 <h2>${response.results[i].title}</h2>
//                 <div class="card-text">
//                 <p>${response.results[i].abstract}</p>
//                 </div>
//                 </div>
//                 </div>
//                 <br>
//                 `
//             }
//             catch(err){
//                 console.log(err);

//             }
        
        
//         }
        
//     })}
//     getNews()



