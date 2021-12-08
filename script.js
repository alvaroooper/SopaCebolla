
//Animaciones al poner y quitar el ratón
function encimaI() {
    if(tabIngredientes && tabIngredientes.style) {
        tabIngredientes.style.width = '50%';
    }
}
function normalI() {
    if(tabIngredientes && tabIngredientes.style) {
        tabIngredientes.style.width = '40%';
    }
}

function encimaR() {
    if(tabReceta && tabReceta.style) {
        tabReceta.style.width = '50%';
    }
}
function normalR() {
    if(tabReceta && tabReceta.style) {
        tabReceta.style.width = '40%';
    }
}

function encimaP() {
    if(tabPersonal && tabPersonal.style) {
        tabPersonal.style.width = '50%';
    }
}
function normalP() {
    if(tabPersonal && tabPersonal.style) {
        tabPersonal.style.width = '40%';
    }
}

function encimaIn() {
    if(menuIn0 && menuIn0.style) {
        menuIn0.style.color = "limegreen";
    }
}
function normalIn() {
    if(menuIn0 && menuIn0.style) {
        menuIn0.style.color = "white";
    }
}

function encimaAnt() {
    if(menuIn1 && menuIn1.style) {
        menuIn1.style.color = "limegreen";
    }
}
function normalAnt() {
    if(menuIn1 && menuIn1.style) {
        menuIn1.style.color = "white";
    }
}

function encimaSig() {
    if(menuIn2 && menuIn2.style) {
        menuIn2.style.color = "limegreen";
    }
}
function normalSig() {
    if(menuIn1 && menuIn1.style) {
        menuIn2.style.color = "white";
    }
}

function bordeMediaCov() {
    if(mediacov && mediacov.style) {
        mediacov.style.width = '100px';
    }
}

function bordeMediaCovNor() {
    if(mediacov && mediacov.style) {
        mediacov.style.width = '75px';
    }
}

//Direccionamiento al hacer click
function pagIni() {
    window.open("index.html", "_self");
}

function pagIngr() {
    window.open("Ingredientes.html", "_self");
}

function pagRec() {
    window.open("Receta.html", "_self");
}

function pagForm() {
    window.open("Formulario.html", "_self");
}

function pagPers() {
    window.open("Personal.html", "_self");
}



