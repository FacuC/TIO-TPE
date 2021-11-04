"uses strict";
let boton = document.getElementById('btn-get');
let lista = document.getElementById('lista');
boton.addEventListener('click', getDatos);
const url = "https://60c2aab9917002001739d577.mockapi.io/bat/voluntarios";
async function getDatos() {
    try {
        let res = await fetch(url);
        let json = await res.json();
        lista.innerHTML = "";
        for (const elemento of json) {
            lista.innerHTML += `<li>${elemento.nombre}, ${elemento.apellido}</li>`;
        }
    } catch (error) {
        console.log(error);
    }
}