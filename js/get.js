"uses strict";
let boton = document.getElementById('btn-get');
boton.addEventListener('click', getDatos);
const url = "https://60c2aab9917002001739d577.mockapi.io/bat/voluntarios";
async function getDatos() {
    try {
        let res = await fetch(url);
        let json = await res.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
}