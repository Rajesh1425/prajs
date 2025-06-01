const val=prompt("name is ")
const num=Float(val)
const ans=document.createElement("h1")

ans.innerHTML=val
document.body.appendChild(ans)
var res=num % 5;
console.log(res);

if(num% 5===0){
   

    console.log("it is multiply by 5"+ res);         
    
}else{
    console.log("it is  notttttt multiply by 5"+res);
}
