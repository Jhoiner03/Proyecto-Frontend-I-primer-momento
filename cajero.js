
// Sistema bancario "MI PLATA"


// Variables para guardar los datos del usuario

let nombreUsuario = "";
let claveUsuario = "";
let saldoUsuario = 0;
let usuarioRegistrado = false;


// Arreglos para guardar los movimientos

let fechasMovimientos = [];
let tiposMovimientos = [];
let montosMovimientos = [];

// REGISTRAR USUARIO

function registrar() {

    let nombre = prompt("Ingrese su nombre de usuario:");

    if (nombre == null || nombre == "") {

        alert("Debe ingresar un nombre de usuario.");

        return;
    }

    let clave = prompt("Ingrese una clave:");

    if (clave == null || clave == "") {

        alert("Debe ingresar una clave.");

        return;
    }

    let saldo = prompt("Ingrese el saldo inicial:");

    saldo = Number(saldo);

    if (isNaN(saldo) || saldo < 0) {

        alert("El saldo debe ser un número válido.");

        return;
    }

    nombreUsuario = nombre;
    claveUsuario = clave;
    saldoUsuario = saldo;
    usuarioRegistrado = true;

    // Vaciar los movimientos al registrar un usuario nuevo

    fechasMovimientos = [];
    tiposMovimientos = [];
    montosMovimientos = [];

    alert("Usuario registrado correctamente.");
}