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





