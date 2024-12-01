 
const button1 = document.getElementById("button1");
const addsong =document.getElementsByClassName("addsong");
const awollist =document.getElementsByClassName("awollist");

button1.addEventListener("click", () => {
const addnewsong= addsong.value.trim();

if (addnewsong) { const add1 = document.createElement("li"); add1.textContent = addnewsong; awollist.appendChild(add1); addsong.value="";} else { alert("");}
});