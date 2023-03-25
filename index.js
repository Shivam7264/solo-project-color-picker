
const containerEl = document.getElementById("container")
let str=
`
<header>
<div>
    <label for="col" ></label>
    <input type="color" value="#ffb721" id="col">
</div>
<div>
    <select id="opt">
        <option>monochrome</option>
        <option>monochrome-dark</option>
        <option>monochrome-light</option>
        <option>analogic</option>
        <option>analogic-complement</option>
        <option>triad</option>
        <option>quad</option>
    </select>
</div>
<div>
    <button id=btn >get color scheme</button>
</div>
</header>
`
containerEl.innerHTML =str
function render(arr){

let pstr=`<section id="shade">`
if(arr.length){
for(fc of arr){
pstr+=`
<div class="shades" style="background-color:${fc}">${fc}</div>`
}
}
else{
    
    pstr+=`
    <div class="shades" style="background-color:#9C6B04"><span id="hex">#9C6B04</span></div>
    <div class="shades" style="background-color:#CF8D04"><span id="hex">#CF8D04</span></div>
    <div class="shades" style="background-color:#FBAD0B"><span id="hex">#FBAD0B</span></div>
    <div class="shades" style="background-color:#FDBF3C"><span id="hex">#FDBF3C</span></div>
    <div class="shades" style="background-color:#FED06E"><span id="hex">#FED06E</span></div> `
}

pstr+=`</section>`
containerEl.innerHTML=str+pstr
let opt=document.getElementById(`opt`)
let col=document.getElementById(`col`)
document.getElementById("btn").addEventListener("click",async function(){
    const response = await fetch(`https://www.thecolorapi.com/scheme?hex=${col.value.slice(1)}&mode=${opt.value}&count=5`)
    const data = await response.json()
    let arr=[]
    for(temp of data.colors){
       arr.push(temp.hex.value)
    }
    //console.log(arr)
   render(arr)   
   //console.log(containerEl.innerHTML)
   //console.log(document.getElementById('btn'))
})
//console.log(document.getElementById('btn'))
}
render([])

//wo mai kiya hnnn 