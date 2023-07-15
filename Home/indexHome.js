

const newsQuery = document.getElementById("newsQuery");
const newsdetails = document.getElementById("newsdetails");
const newsType = document.getElementById("newsType");
const generalBtn = document.getElementById("general");
const businessBtn = document.getElementById("business");
const sportsBtn = document.getElementById("sports");
const technologyBtn = document.getElementById("technology");
const entertainmentBtn = document.getElementById("entertainment");
const searchBtn = document.getElementById("searchBtn");

const API_KEY = "248076a179b4446ca60d2fbbe2fbbb60";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";
const HEADLINE_NEWS = "https://newsapi.org/v2/top-headlines?country=in&apikey=";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=business&apikey=";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apikey=";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apikey=";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apikey=";
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=general&apikey=";

// windows.onload = function(){
//     newsType.innerHTML ="<h4>Headlines</h4>";
//     fetchHeadlines();
// };



generalBtn.addEventListener("click", function(){
    newsType.innerHTML ="<h4>General News</h4>";
    fetchGeneralNews();

});

businessBtn.addEventListener("click", function(){
    newsType.innerHTML ="<h4>Business</h4>";
    fetchBusinessNews();
});

sportsBtn.addEventListener("click", function(){
    newsType.innerHTML ="<h4>Sports</h4>";
    fetchSportsNews();
});

technologyBtn.addEventListener("click", function(){
    newsType.innerHTML ="<h4>Technology</h4>";
    fetchTechnologyNews();
});

entertainmentBtn.addEventListener("click", function(){
    newsType.innerHTML ="<h4>Entertainment</h4>";
    fetchEntertainmentNews();
});

searchBtn.addEventListener("click", function(){
    newsType.innerHTML ="<h4>Search: "+newsQuery.value+"</h4>";
    fetchQueryNews();
});


// const fetchHeadline = async () => {
//     const response = await fetch(HEADLINE_NEWS+API_KEY);
//     newsData = [];
//     if (response.status >= 200 && response.status < 300){
//             const myJson = await response.json();
//             console.log(myJson)
//             newsData = myJson.articles;
//     } else {
//             console.log(response.status, response.statusText);
//     }
//     displayNews();
// }


const fetchGeneralNews = async () => {
    const response = await fetch(GENERAL_NEWS+API_KEY);
    newsData = [];
    if (response.status >= 200 && response.status < 300){
            const myJson = await response.json();
            console.log(myJson)
            newsData = myJson.articles;
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
            newsData = myJson.articles;
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
            newsData = myJson.articles;
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
            newsData = myJson.articles;
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
            newsData = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchQueryNews = async () => {
    if(newsQuery.value == null)
            return;

    const response = await fetch(SEARCH_NEWS+encodeURIComponent(newsQuery.value)+"&apikey="+API_KEY);
        newsData = [];
    if(response.status >= 200 && response.status < 300){
        const myJson = await response.json();
        newsData = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
    }
}

function displayNews(){

    newsdetails.innerHTML = "";

    if(newsData.length == 0){
        newsdetails.innerHTML = "<h5> There is no data found</h5>"
        return ;
    }
    newsData.forEach(news => {

        const date = news.publishedAt.split("T")
        const col = document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2";

        const card = document.createElement('div');
        card.className = "p-2";

        const image = document.createElement('img');
        image.setAttribute("height", "matchparent");
        image.setAttribute("width", "100%");
        image.src=news.urlToImage;

        const cardBody = document.createElement('div');

        const newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        const dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        const description = document.createElement('p');
        description.className = "text-muted";
        description.innerHTML = news.description;

        const link = document.createElement('a');
        link.className="btn btn-dark";
        link.setAttribute("target", "_blank");
        link.innerHTML = "Read More";
        link.href = news.url;

        cardBody.appendChild(link);
        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(description);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsdetails.appendChild(col);

    });
}