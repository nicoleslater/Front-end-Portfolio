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
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=general&apikey=";



generalBtn.addEventListener("click", function(){
    fetchGeneralNews();

});
businessBtn.addEventListener("click", function(){
    fetchBusinessNews();
});
sportsBtn.addEventListener("click", function(){
    fetchSportsNews();
})
technologyBtn.addEventListener("click", function(){
    fetchTechnologyNews();
});
entertainmentBtn.addEventListener("click", function(){
    fetchEntertainmentNews();
});
searchBtn.addEventListener("click", function(){
    fetchQueryNews();
});

const fetchGeneralNews = async () => {
    const response = await fetch(GENERAL_NEWS+API_KEY);
    newsData = [];
    if (response.status >= 200 && response.status < 300){
            const myJson = await response.json();
            console.log(myJson)
            newsData = myJson;
    } else {
            console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchBusinessNews = async () => {
    const response = await fetch(BUSINESS_NEWS+API_KEY);
    newsData = [];
    if (response.status >= 200 && response.status < 300){
            const myJson = await response.json();
            newsData = myJson;
    } else {
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchSportsNews = async () => {
    const response = await fetch(SPORTS_NEWS+API_KEY);
    newsData = [];
    if (response.status >= 200 && response.status < 300){
            const myJson = await response.json();
            newsData = myJson;
    } else {
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchEntertainmentNews = async () => {
    const response = await fetch(ENTERTAINMENT_NEWS+API_KEY);
    newsData = [];
    if (response.status >= 200 && response.status < 300){
            const myJson = await response.json();
            newsData = myJson;
    } else {
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchTechnologyNews = async () => {
    const response = await fetch(TECHNOLOGY_NEWS+API_KEY);
    newsData = [];
    if (response.status >= 200 && response.status < 300){
            const myJson = await response.json();
            newsData = myJson;
    } else {
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchQueryNews = async () => {
    const response = await fetch(SEARCH_NEWS+newsQuery.value+"&apikey="+API_KEY);
        newsData = [];
    if(response.status >= 200 && response.status < 300){
        const myJson = await response.json();
        newsData = myJson;
    } else {
        console.log(response.status, response.statusText);
    }
}