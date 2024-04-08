console.log('.......API Strated......');
function callAPI(){
    fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=2693961fa2e4450d99c1044d463b3b67")
    .then((res)=>{
       return res.json();
        })
        .then((data)=>{
            renderUI(data);
            // console.log(data);
        })
    }
    callAPI();
function renderUI(data){
    
    
    // console.log(data);
    const root=document.getElementById("root");
    const articles=data.articles;
    for(let i=0;i<articles.length;i++){
    // console.log(articles);
    const ar=articles[i];
    // console.log(ar);
    const div=document.createElement("div");
    div.setAttribute("class","news-card");
    const h3 = document.createElement("h3");
    div.innerText=ar.description;
    root.appendChild(div);
   
    h3.innerText=ar.title;
    div.appendChild(h3);
    
   
    
    // const div =document.createElement("div");
    
    
    // h3.innerText=ar.title;
    // console.log(h3);
    const img = document.createElement("img");
    img.src=ar.urlToImage;
   
   div.appendChild(img);
   }
}
// renderUI();
