let savedNews = JSON.parse(localStorage.getItem("savedNews")) || [];

let container = document.getElementById("savedContainer");

savedNews.forEach(function(news){

let div = document.createElement("div");

div.innerHTML = `
<h3>${news.category}</h3>
<p>${news.author}</p>
<p>${news.content}</p>
<a href="${news.url}" target="_blank">Read More</a>
`;

container.appendChild(div);

});
