




let searchNews = async (query) =>{

    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${query}`);

        let data = await res.json();
        console.log(data)

        return data;

    }catch(err){
        console.log(err)
    }
}



let querySearch = async(query) =>{
    
   try{
    let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`)

    let data = await res.json();

    console.log(data)

    return data;

   }catch(err){
       console.log(err)
   }

}




let append = (data) =>{

    data.forEach(({description,urlToImage,title})=>{

        let box = document.createElement("div");
        box.setAttribute("id","results")

  let div1 = document.createElement('div')

        let img = document.createElement("img")
        img.src = urlToImage;

        div1.append(img)

let div2 = document.createElement('div')
          
        let h3 = document.createElement("h3")
        h3.innerText= title

        let p = document.createElement("p")
        p.innerText = description

        div2.append(h3,p)

        box.append(div1,div2)

        document.querySelector(".news").append(box)

    })

}

export {searchNews,querySearch,append}