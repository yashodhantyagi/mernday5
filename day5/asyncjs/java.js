{let arr = [2,10,21,32];
function printArray(arr){
    for(let i = 0;i<arr.length;i++){
        console.log(arr[i]);
    }
}
printArray(arr);}
{let arr = [2,10,21,32];
    function printPretty(elem)
    {console.log(':',elem);}
    {
        for(let i = 0;i<arr.length;i++){
            printPretty(arr[i]);
        }arr.forEach((a)=>{
            console.log(':',a);
        });
        }
    
    printArray(arr);

}
{
function printPretty(elem)
{console.log(':',elem);}
setTimeout(printPretty,2000);
}

{
    console.log('GEC start');
    function printPretty(){
        console.log("prettyStart");
        let ans = 2+3;
        console.log(ans);
        console.log("prettyEnd");
    }
    setTimeout(printPretty,5000);
    console.log('GEC End');
}
const btn=document.getElementById('btn');
btn.addEventListener("click",printPretty);
{
    console.log('start')
    const req= fetch("https://api.github.com/users/deepak3440")
console.log(req);
req.then(()=>console.log('fetched'));


    console.log('end');
}
{
    console.log('start')
fetch('https://dummyjson.com/products/1')
.then(res => console.log(res))
// .then(json => console.log(json))
   console.log('end')         
}
{
    console.log('start')
const req =fetch('https://dummyjson.com/products/1')
const res =req.then(res => res.json())
res.then((data)=>console.log(data));
// .then(json => console.log(json))
   console.log('end')         
}


