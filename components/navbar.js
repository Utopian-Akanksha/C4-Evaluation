
function navbar(){
    return `<h1><a href="index.html">News App</a></h1>
       
    <input type="text" id="search_input">`;
}

function main(){
    return `<div>
    <h2>Countries</h2>
    <div id="sidebar">
     <button id="in">India</button>
     <button id="ch">China</button>
     <button id="us">Usa</button>
     <button id="uk">United Kingdom</button>
     <button id="nz">New Zealand</button>
    </div>
 </div>
 <div class="news"></div>`;
}

export {navbar,main}