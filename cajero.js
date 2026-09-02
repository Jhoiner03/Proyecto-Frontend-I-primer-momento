
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
// Inicio de sesion

function iniciarSesion() {

    if (usuarioRegistrado == false) {

        alert("No hay ningún usuario registrado.");

        return;
    }

    let intentos = 0;
    let ingresoCorrecto = false;

    while (intentos < 3 && ingresoCorrecto == false) {

        let nombre = prompt("Ingrese su nombre de usuario:");
        let clave = prompt("Ingrese su clave:");

        if (nombre == nombreUsuario && clave == claveUsuario) {

            ingresoCorrecto = true;

            alert("Inicio de sesión exitoso.");

            menuPrincipal();

        } else {

            intentos = intentos + 1;

            if (intentos < 3) {

                alert(
                    "Usuario o clave incorrectos.\n" +
                    "Intentos utilizados: " + intentos +
                    "\nIntentos restantes: " + (3 - intentos)
                );

            } else {

                alert(
                    "Cuenta bloqueada por 24 horas, " +
                    "comunícate con tu banco"
                );
            }
        }
    }
}
// Menu principal

function menuPrincipal() {

    let opcion = "";

    while (opcion != "5") {

        opcion = prompt(
            "=== MI PLATA ===\n\n" +
            "1. Retirar Dinero\n" +
            "2. Consultar Saldo\n" +
            "3. Consignar Dinero\n" +
            "4. Consultar Movimientos\n" +
            "5. Salir\n\n" +
            "Elija una opción:"
        );

        if (opcion == "1") {

            retirarDinero();

        } else if (opcion == "2") {

            consultarSaldo();

        } else if (opcion == "3") {

            consignarDinero();

        } else if (opcion == "4") {

            consultarMovimientos();

        } else if (opcion == "5") {

            alert("Sesión finalizada.");

        } else {

            alert("Opción no válida.");
        }
    }
}

// Retirar dinero

function retirarDinero() {

    let monto = prompt("Ingrese el monto que desea retirar:");

    monto = Number(monto);

    if (isNaN(monto) || monto <= 0) {

        alert("Ingrese un monto válido.");

        return;
    }

    if (monto > saldoUsuario) {

        alert("No puede retirar más dinero del saldo actual.");

        return;
    }

    saldoUsuario = saldoUsuario - monto;

    // Guardar el movimiento en los arreglos

    fechasMovimientos.push(new Date().toLocaleString());
    tiposMovimientos.push("Retiro");
    montosMovimientos.push(monto);

    alert(
        "Retiro realizado correctamente.\n" +
        "Nuevo saldo: $" + saldoUsuario
    );
}

// Verificar saldo

function consultarSaldo() {

    alert("Su saldo actual es: $" + saldoUsuario);
}

// Consignar dinero

function consignarDinero() {

    let monto = prompt("Ingrese el monto que desea consignar:");

    monto = Number(monto);

    if (isNaN(monto) || monto <= 0) {

        alert("El monto a consignar debe ser un número positivo.");

        return;
    }

    saldoUsuario = saldoUsuario + monto;

    // Guardar el movimiento en los arreglos

    fechasMovimientos.push(new Date().toLocaleString());
    tiposMovimientos.push("Consignación");
    montosMovimientos.push(monto);

    alert(
        "Consignación realizada correctamente.\n" +
        "Nuevo saldo: $" + saldoUsuario
    );
}

// movimientos realizados

function consultarMovimientos() {

    if (tiposMovimientos.length == 0) {

        alert("No tiene movimientos registrados.");

        return;
    }

    let historial = "=== MOVIMIENTOS ===\n\n";

    for (let i = 0; i < tiposMovimientos.length; i++) {

        historial =
            historial +
            "Fecha: " + fechasMovimientos[i] + "\n" +
            "Tipo: " + tiposMovimientos[i] + "\n" +
            "Monto: $" + montosMovimientos[i] + "\n\n";
    }

    alert(historial);
}
