var arr=[{
    dp:"https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1516195851888-6f1a981a862e?q=80&w=1410&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
 {   dp:"https://images.unsplash.com/photo-1514993805013-c428d7f63ad4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1530981785497-a62037228fe9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{dp:"https://images.unsplash.com/photo-1541257710737-06d667133a53?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1526231237819-de846f3a7e16?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{dp:"https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},



]
var storiyan=document.querySelector("#storiyan")
var clutter=""

arr.forEach(function(elem,idx){
    clutter+=`<div class="story">
            <img id="${idx}" src="${elem.dp}" alt="">
        </div>`


})
storiyan.innerHTML=clutter
storiyan.addEventListener("click",function(dets){
document.querySelector("#full-screen").style.display="block"
document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`


setTimeout(function(){
    document.querySelector("#full-screen").style.display="none"

},3000)
});