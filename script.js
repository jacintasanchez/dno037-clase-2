//pregunto la fecha y hora
var laHora = new Date().getHours();
document.querySelector("#hora").innerHTML = laHora;
var elSaludo;
if (5 < laHora && laHora < 13) {
    elSaludo = "¡Buen día Jacinta! &#127748;";
} else if (12 < laHora && laHora < 20) {
    elSaludo = "¡Buenas tarde Jacinta! &#127749;";
} else {
    elSaludo = "¡Buenas noches Jacinta! &#127750;";
}
// pregunto la ubicación
var dondeEstas;
if (document.body.classList.contains("portada")) {
    dondeEstas = true;
} else {
    dondeEstas = false;
}
//voy a buscar unos datos
var starWars;
function preload() {
    var api = "https://swapi.dev/api/people/?page=3&format=json";
    starWars = loadJSON(api);
}
//tomo el main
var loPrincipal = document.querySelector("main");

function setup() {
    noCanvas();
    createElement("h1", elSaludo).parent(loPrincipal).id("contenido");
    createA("index.html", "index").parent("vinculos");
    createA("page.html", "page").parent("vinculos");
    if (dondeEstas) {
        portada();
    } else {
        pagina();
    }
}

function portada() {
    createSpan(" A que no sabías que " + starWars.results[3].name + " nació el año " + starWars.results[3].birth_year).parent("contenido");
    select("a:nth-child(1)").style("color", "#FFFFFF");
}
function pagina() {
    createSpan(" A que no sabías que " + starWars.results[1].name + " nació el año " + starWars.results[1].birth_year).parent("contenido");
    select("a:nth-child(2)").style("color", "#FFFFFF");
}