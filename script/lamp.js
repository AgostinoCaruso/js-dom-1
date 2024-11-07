"use strict";
console.clear();

/*
*Consegna*
Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)
*BONUS*:100:
Facciamo accendi e spegni:
- Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
- Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
- E così via...
*/

const buttonLamp = document.getElementById("buttonLamp");
buttonLamp.textContent

const myBody = document.querySelector("body");

const lampWhite = document.getElementById("whiteLamp");
const lampYellow = document.getElementById("yellowLamp");

lampWhite.style.transform = "rotate(180deg)";
lampYellow.style.transform = "rotate(180deg)";

buttonLamp.addEventListener("click", function(){

    lampWhite.classList.toggle("d-none");
    lampYellow.classList.toggle("d-none");

    if(lampWhite.classList.contains("d-none")){

        myBody.classList.toggle("accesoBody");
        buttonLamp.innerHTML = "spengi";
        buttonLamp.classList.toggle("buttonLampOn");
    }else{
        
        myBody.classList.toggle("accesoBody");
        buttonLamp.innerHTML = "accendi";
        buttonLamp.classList.toggle("buttonLampOn");
    }
})