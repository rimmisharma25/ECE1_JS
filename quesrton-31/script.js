//Asynchronous Programming
let promise = new promise((resolve,reject)=>{
    let success = true;
    if(success)
        resolve("Data Loaded");
    else
        reject("Error Occuured");
        
});
promise.then(result=> console.log(result))//then tb use hoga jb code resolve krega and catch tb use hoga jb value reject hogi
.catch(error=> console.log(error)); //promise ke teen case h pending,resolve,reject.

// synchronous style
async function getData(){
    let response = await fetch(apilink);//await
    let data = await responce.json();
    console.log(data);
}
getData();
 //fetch API
 fetch(apilink)
 .then(responce => responce.json())
 .then(data => console.log(data))
 .catch(error=> console.log(error));
 //Error Handling
 //Error can be handled using try...catch
 try{
    let x = y+10;
 }catch(error){
    console.log(error.message);
 }
 //localstorage
 localStorage.setItem("name","jeet");//local storage string format me hota h
 let nam1 = localStorage.getItem("name");
 console.log(name1);
 //remove data
 localStorage.removeItem("name");
 //store Object:
 let user = {name:"jeet",age:50};
 localStorage.setItem("user",JSON.stringify(user));//JSON.stringify,JSON.parse are used to convert string to json
 //Retrieve object 
 let data = JSON.parse(localStorage.getItem("user"));
 console.log(data.name,data.age);
//Exp-3
//HTML
// using dispatchEvent,h2,input,button
.add event AudioListener
//change background colour
//doucment.getelementbyid("bgColorbtn").onclick = function()
{
    document.body.style.backgroundColor = 
    "#" + Math.floor(Math.random() * 16777215).toString(16);
};
//increae font size
document.getElementById("fontsizebtn").addEventListener("click",function(){
    fontsize +=2;
    paragraph.style.fontsize = fontSize+"px";
});
//show/hide paragraph
document.getElementById("togglebtn").addEventListener("click,function")



//reset page