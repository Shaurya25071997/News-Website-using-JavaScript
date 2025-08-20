console.log("Welcome to index.js")
// cd624a7fa8b047438f72ceccd2e340d8
// Initialize the news parameters
let country = 'us';
let apiKey = 'cd624a7fa8b047438f72ceccd2e340d8'


// Grab the news container
newsAccordion = document.getElementById('newsAccordion');
// Create an ajax request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`, true);
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        console.log(json);
        let articles = json.articles;
        // console.log(articles)
        let newsHTML = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card">
    <div class="card-header" id="heading${index}">
        <h5 class="mb-0">
            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
             <b>Breaking News ${index+1}</b> ${element["title"]}
            </button>
        </h5>
    </div>

    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
        <div class="card-body">${element["content"]}. <a href="${element['url']}" target="_blank">Read more here</a></div>
    </div>
</div>`
            newsHTML += news;
        });
        newsAccordion.innerHTML = newsHTML;

    }

    else {
        console.log("Some error occured")
    }


}
xhr.send()
// xhr.getResponseHeader('Content-type', 'application/json');
// create a get request

