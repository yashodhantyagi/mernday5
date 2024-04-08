console.log('.......API Strated......');
function callAPI(){
    fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?key=LHDSC3BZ7BM582CRZ3VJWFCDQ")
    .then((res)=>res.json())
    .then(renderUI);
        }
        
        // .then((data)=>{
           
            // console.log(data);
        
    
    callAPI();
 function renderUI(data){
    const days = data.days;
    
    console.log(days);{
    const root = document.getElementById("root");
     const row=document.createElement("tr");
     root.appendChild(row);

     const cell = document.createElement("th");
     cell.innerText = 'date';
     row.appendChild(cell);
     
    const cell2 = document.createElement("th");
     cell2.innerText = 'maximum Temperature';
     row.appendChild(cell2);
     const cell3 = document.createElement("th");
     cell3.innerText = 'maximum Temperature';
     row.appendChild(cell3);
    
    }}
     

//     const articles=data.articles;
//     for(let i=0;i<articles.length;i++){
//     // console.log(articles);
//     const ar=articles[i];
//     // console.log(ar);
//     const div=document.createElement("div");
//     div.setAttribute("class","news-card");
//     const h3 = document.createElement("h3");
//     div.innerText=ar.description;
//     root.appendChild(div);
   
//     h3.innerText=ar.title;
//     div.appendChild(h3);
    
   
    
//     // const div =document.createElement("div");
    
    
//     // h3.innerText=ar.title;
//     // console.log(h3);
//     const img = document.createElement("img");
//     img.src=ar.urlToImage;
   
//    div.appendChild(img);
//    }
// }
// // renderUI();
