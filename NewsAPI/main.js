let key = 'c1b3c9580b4545788c252fb36c891567';
let country = 'us'
let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${key}`;
const newsBox = document.getElementById("news");

const fetchData = async() =>{
    try{
        const res = await fetch(url)
        const data = await res.json()
        // console.log(data)
        let news = (data.articles);
        news.map(function(number){
            let div = document.createElement('div');
            div.innerHTML = `<br>
                            <img style="max-width:800px" src=${number.urlToImage}
                            <h1>${number.title}</h1>
                            <h2>${number.description}</2>
                            <h3>${number.url}</h3>`;
            newsBox.appendChild(div);
        })
    } catch (error){
        console.log(error)
    }
}

fetchData()