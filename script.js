/*
alert("Починаємо?");

const firstConfirm = confirm("Ще раз запитую?");

const firstProm = prompt("ти адекватний?");
*/
////////////////////////////////////////////////////
/*
const bodyElement = document.body;
console.log(bodyElement);

const lastChildNode = bodyElement.lastChild;
console.log(lastChildNode);

const childNodes = bodyElement.childNodes;
console.log((childNodes));

console.log(bodyElement.hasChildNodes("h1"));
*/
///////////////////////////////////
/*
const childNodes = document.body.childNodes;

for (let node of childNodes) {
        console.log(node);
}
*/
/*
const bodyElement = document.body;

const nextNodes = bodyElement.nextElementSibling;
const preNodes = bodyElement.previousElementSibling;
const parentNodes = bodyElement.parentElement;

console.log(nextNodes);
console.log(preNodes);
console.log(parentNodes);
*/
/*
const bodyElement = document.body;
console.log(bodyElement.children);
*/
/////////////////////////////////////////////////////////////////
/*
const one = document.querySelectorAll('.menu');
const sublist = one.querySelectorAll('nav');
console.log(sublist);
*/
/*
const list = document.getElementsByTagName('li');
console.log(list);
*/
/////////////////////////////////////////////////////////////
/*
const elem = document.querySelector("nav");
const elemText = elem.innerHTML;
console.log(elemText);

elem.innerHTML = "h1"
console.log(elemText);
*/
///////////////////////////////////////////////////////////////
/*
const elem = document.querySelector("nav");
const elemText = elem.innerHTML;
console.log(elemText);

elem.innerHTML = `${elemText} <p> MENU 2 </p>`
*/
/*
const elem = document.querySelector("nav");
const elemText = elem.outerHTML;
console.log(elemText);

elem.innerHTML = "Poker";
console.log(elemText);
*/
//////////////////////////////////////////////////////////////////
/*
const elem = document.querySelector("nav");
const elemText = elem.textContent;
console.log(elemText);

elem.textContent = "<p>Poker";
console.log(elemText);
*/
/*
const elem = document.querySelector("nav");
const elemText = elem.nextSibling;
console.log(elemText.data);

elemText.data = "Hello";
*/
//////////////////////////////////////////////////////////////////////////
/*
const elem = document.querySelector("nav");
const elemText = elem.innerHTML;

const newElem = document.createElement("div");
newElem.innerHTML = elemText;
console.log(newElem)
elem.before(newElem);
*/
///////////////////////////////////////////////\
/*
const elem = document.querySelector("nav");


const box = document.createElement("div");
box.innerHTML = "sdfweg   weg";

elem.append(box);
console.log(box.innerHTML);
*/
/////////////////////////////////////////////////
/*
const elem = document.querySelector('nav');
const newElem = elem.innerHTML;

elem.insertAdjacentHTML(
        "beforebegin",   //beforeend, afterend, afterbegin
        `<h1>color red ${newElem}<h2/>`
);
console.log(elem);
*/
/////////////////////////////////////////
/*
const elem = document.querySelector(".menu__list");
const box = document.querySelector(".link2");

elem.prepend(box);
*/
/*
const elem = document.querySelector("nav");
const newElem = elem.cloneNode(true);

const newMenu = document.querySelector(".works");
newMenu.before(newElem);
*/
////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////
/*
const elem = document.querySelector("nav");
const newElem = elem.innerHTML;
newElem.remove;
*/
/*
const elem = document.querySelector("nav");
const clon = elem.cloneNode(true);

const box = document.querySelector(".works");

box.before(clon);
*/
/*
const elem = document.createElement("h1");
elem.innerHTML = "zdorov"

const box = document.querySelector('nav');
box.prepend(elem);
*/
console.log("concole");










































