localStorage.clear();

localStorage.setItem('ID1','1');
localStorage.setItem('ID2','2');
localStorage.setItem('ID3','3');


let myNodelist = document.getElementsByTagName("li");
for (let i = 0; i < myNodelist.length; i++) {
let span = document.createElement("span");
let txt = document.createTextNode("\u00D7"); //caracter x
span.className = "close";
span.appendChild(txt);
myNodelist[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
close[i].onclick = function() {
let div = this.parentElement;
localStorage.removeItem('ID1');
div.style.display = "none";
}
}

let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
if (ev.target.tagName === 'LI') {
ev.target.classList.toggle('checked');
}
}, false);

function addElemento() {
let li = document.createElement("li");
let inputValue = `${day}/${month}/${year} ` + document.getElementById("tarefa").value.toUpperCase();
let t = document.createTextNode(inputValue);
li.appendChild(t);
if (inputValue === '') {
alert("Você precisa descrever a tarefa");
} else {
document.getElementById("itemLista").appendChild(li);
}
document.getElementById("tarefa").value = "";
let span = document.createElement("SPAN");
let txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
li.appendChild(span);
for (let i = 0; i < close.length; i++) {
close[i].onclick = function() {
let div = this.parentElement;
div.style.display = "none";
}
}
}

function deleteAll(){
let div = document.getElementById("itemLista");
div.style.display = "none";
}

function marcaAll(){
let div = querySelectorAll("li");
div.addClass('checked');
}

const date = new Date();
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');

