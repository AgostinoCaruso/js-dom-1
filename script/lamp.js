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
buttonLamp.innerHTML = "ACCENDI";

const lampWhite = document.getElementById("whiteLamp");
const lampYellow = document.getElementById("yellowLamp");

lampWhite.style.transform = "rotateY(180deg)";


buttonLamp.addEventListener("click", function(){
    lampWhite.classList.toggle("d-none");
    lampYellow.classList.toggle("d-none");
})