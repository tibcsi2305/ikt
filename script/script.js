
addEventListener("DOMContentLoaded", () => {

// Linkek betöltése minden oldalhoz
fetch("../src/elemek/header.html").then(response => response.text()).then(text => {
    
    const temp = document.createElement("div")
    temp.innerHTML = text
    document.querySelector(".cimplaceholder").replaceWith(temp.firstElementChild)


    })



})