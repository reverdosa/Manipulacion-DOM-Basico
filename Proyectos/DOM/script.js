//h1 { color: red}
//.parrafito{...}
//#pid{...}

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector(' .parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');



console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})


h1.innerHTML = "Mi Nuevo Título";
h1.innerText = "Mi Nuevo Título";
//console.log(h1.getAttribute("class"));
//h1.setAttribute("class", "rojo");

h1.classList.add("rojo");
h1.classList.remove("verde");
//h1.classList.toggle("verde");
//h1.classList.cotains("verde");

input.value = "Su p0t4 m@d#r";

const img = document.createElement("img");
img.setAttribute("src", "https://static.platzi.com/static/images/conf/logo_black@2x.png")
console.log(img)

pid.append(img);