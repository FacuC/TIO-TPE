"uses strict";
const url = "https://60c2aab9917002001739d577.mockapi.io/bat/voluntarios";
let btnPut = document.querySelector("#put");
btnPut.addEventListener("click", () => {
    editar(16);
});
async function editar(id) {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = document.getElementById("telefono").value;
    let mail = document.getElementById("email").value;
    let area = document.getElementById("area").value;
    let turno = document.getElementById("turno").value;

    if (
        nombre == "" ||
        apellido == "" ||
        telefono == "" ||
        mail == "" ||
        area == "" ||
        turno == ""
    ) {
        console.log("uno de los campos estaba vacio");
    } else {
        let nuevoContenido = {
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            mail: mail,
            area: area,
            turno: turno,
        };
        try {
            let res = await fetch(url + "/" + id, {
                method: "PUT",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(nuevoContenido),
            });
            if (res.ok) {
                console.log("Modificado!");
            }
        } catch (error) {
            console.log(error);
        }
    }
}