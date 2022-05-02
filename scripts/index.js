// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


import {navbar,main} from "../components/navbar.js"
document.getElementById("navbar").innerHTML = navbar();
document.getElementById("main").innerHTML = main();




import {searchNews,querySearch,append} from "./fetch.js"

let search = (event) =>{

    event.preventDefault();

    if(event.key === "Enter"){

        let query = document.getElementById("search_input").value ;
        querySearch(query).then((data)=>{
            console.log(data)

        let news = document.querySelector(".news")
        window.location.href="search.html"
        append(data.articles)
        })
       
    };

}

document.getElementById("search_input").addEventListener("keydown",search);




let countries = document.getElementById("sidebar").children;

function countrySearch(){

    console.log(this.id)
    searchNews(this.id).then((data)=>{
        console.log(data)

        let news = document.querySelector(".news")
        news.innerHTML = null;
        append(data.articles)
    })
 
 }

for(let el of countries){
    el.addEventListener("click",countrySearch)
}

