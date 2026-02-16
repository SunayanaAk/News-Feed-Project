const API = "https://content.newtonschool.co/v1/pr/64e3d1b73321338e9f18e1a1/inshortsnews";

let allNews = [];

fetch(API)
.then(response => response.json())
.then(data => {
    allNews = data;
    displayNews(data);
});

function displayNews(newsArray){

const container = document.getElementById("newsContainer");

container.innerHTML = "";

newsArray.forEach(function(news){

const div = document.createElement("div");

div.innerHTML = `
<h3>${news.category}</h3>
<p>${news.author}</p>
<p>${news.content}</p>
<a href="${news.url}" target="_blank">Read More</a>
<button onclick='saveNews(${JSON.stringify(news)})'>Like</button>
`;

container.appendChild(div);

});

}



function saveNews(news){

let saved = JSON.parse(localStorage.getItem("savedNews")) || [];

saved.push(news);

localStorage.setItem("savedNews", JSON.stringify(saved));

alert("News Saved");

}



document.getElementById("category").addEventListener("change", function(){

let value = this.value;

if(value === "all"){
displayNews(allNews);
}
else{

let filtered = allNews.filter(function(news){
return news.category === value;
});

displayNews(filtered);

}

});

